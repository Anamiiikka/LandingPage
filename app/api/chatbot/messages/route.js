import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.text || typeof body.isBot !== 'boolean' || !body.userId) {
      console.error('Invalid message data:', body);
      return NextResponse.json({ error: 'Invalid message data' }, { status: 400 });
    }
    const { text, isBot, options, userId } = body;

    const client = await clientPromise;
    const db = client.db('adalab-chatbot');

    const message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options: options || [],
    };

    // Update or create a chat document for the user
    const result = await db.collection('chats').updateOne(
      { userId },
      {
        $push: { messages: message },
        $setOnInsert: { createdAt: new Date() },
      },
      { upsert: true }
    );

    return NextResponse.json({ ...message, userId }, { status: 201 });
  } catch (error) {
    console.error('Error saving message:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}