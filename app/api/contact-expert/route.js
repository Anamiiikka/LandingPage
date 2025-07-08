import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

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
const hireFromUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const HireFromUs = mongoose.models.HireFromUs || mongoose.model('HireFromUs', hireFromUsSchema);

export async function POST(request) {
  try {
    await connectToDatabase();

    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      console.error('Missing fields:', { name, email, message });
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save hire-from-us request
    const hireRequest = new HireFromUs({
      name,
      email,
      message,
    });

    await hireRequest.save();
    console.log('Hire-from-us request saved:', hireRequest);

    return NextResponse.json(
      { message: 'Hire-from-us request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing hire-from-us request:', error);
    return NextResponse.json(
      { error: 'Failed to process hire-from-us request: ' + error.message },
      { status: 500 }
    );
  }
}