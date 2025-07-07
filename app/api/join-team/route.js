import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';

// MongoDB connection
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'adalabs',
    });
    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Database connection failed');
  }
}

// MongoDB Schema
const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  experience: { type: Number, required: true },
  resumeFileId: { type: mongoose.Schema.Types.ObjectId, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Applicant = mongoose.models.Applicant || mongoose.model('Applicant', applicantSchema);

// POST handler for form submission
export async function POST(request) {
  try {
    await connectToDatabase();

    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name');
    const age = formData.get('age');
    const experience = formData.get('experience');
    const resume = formData.get('resume');

    // Validate input
    if (!name || !age || !experience || !resume) {
      console.error('Missing fields:', { name, age, experience, resume });
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const ageNum = Number(age);
    const experienceNum = Number(experience);

    if (isNaN(ageNum) || ageNum < 18) {
      console.error('Invalid age:', age);
      return NextResponse.json(
        { error: 'Age must be a number and at least 18' },
        { status: 400 }
      );
    }

    if (isNaN(experienceNum) || experienceNum < 0) {
      console.error('Invalid experience:', experience);
      return NextResponse.json(
        { error: 'Experience must be a non-negative number' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(resume.type)) {
      console.error('Invalid file type:', resume.type);
      return NextResponse.json(
        { error: 'Only PDF or DOC files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    if (resume.size > maxFileSize) {
      console.error('File too large:', resume.size);
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Store resume in GridFS
    const db = mongoose.connection.db;
    const bucket = new GridFSBucket(db, { bucketName: 'resumes' });
    const uploadStream = bucket.openUploadStream(resume.name || 'resume');

    const fileBuffer = Buffer.from(await resume.arrayBuffer());
    const resumeFileId = await new Promise((resolve, reject) => {
      uploadStream
        .on('error', (error) => {
          console.error('GridFS upload error:', error);
          reject(error);
        })
        .on('finish', () => {
          console.log('File uploaded to GridFS:', uploadStream.id);
          resolve(uploadStream.id);
        });
      uploadStream.write(fileBuffer);
      uploadStream.end();
    });

    // Save applicant data
    const applicant = new Applicant({
      name,
      age: ageNum,
      experience: experienceNum,
      resumeFileId,
    });

    await applicant.save();
    console.log('Applicant saved:', applicant);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application: ' + error.message },
      { status: 500 }
    );
  }
}