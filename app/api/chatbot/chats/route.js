import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('adalab-chatbot');
    const chats = await db
      .collection('chats')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json({ error: 'Failed to fetch chats' }, { status: 500 });
  }
}