import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import cloudinary from '@/lib/cloudinary'; // Import Cloudinary

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
  resumeUrl: { type: String, required: true }, // Changed to store Cloudinary URL
  jobId: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Applicant = mongoose.models.Applicant || mongoose.model('Applicant', applicantSchema);

// POST handler
export async function POST(request) {
  try {
    await connectToDatabase();

    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name');
    const age = formData.get('age');
    const experience = formData.get('experience');
    const resume = formData.get('resume');
    const jobId = formData.get('jobId');

    // Validate input
    if (!name || !age || !experience || !resume || !jobId) {
      console.error('Missing fields:', { name, age, experience, resume, jobId });
      return NextResponse.json(
        { error: 'All fields are required, including jobId' },
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

    // Upload resume to Cloudinary
    const fileBuffer = Buffer.from(await resume.arrayBuffer());
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'raw',
          folder: 'adalabs_resumes',
          public_id: `${jobId}_${Date.now()}_${resume.name}`,
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            reject(error);
          } else {
            console.log('File uploaded to Cloudinary:', result.secure_url);
            resolve(result);
          }
        }
      );
      uploadStream.end(fileBuffer);
    });

    // Save applicant data
    const applicant = new Applicant({
      name,
      age: ageNum,
      experience: experienceNum,
      resumeUrl: uploadResult.secure_url, // Store Cloudinary URL
      jobId,
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