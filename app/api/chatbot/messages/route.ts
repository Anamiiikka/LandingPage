import { NextResponse } from 'next/server';
     import clientPromise from '@/lib/mongodb';
     import { ObjectId } from 'mongodb';

     // Force dynamic rendering to prevent static generation
     export const dynamic = 'force-dynamic';

     export async function POST(request: Request) {
       try {
         const client = await clientPromise;
         const db = client.db('adalab-chatbot');
         const { text, isBot, options, userId } = await request.json();

         const message = {
           id: Date.now().toString(),
           text,
           isBot,
           timestamp: new Date(),
           options: options || [],
           userId: userId || 'anonymous',
         };

         const result = await db.collection('messages').insertOne(message);
         return NextResponse.json({ ...message, _id: result.insertedId }, { status: 201 });
       } catch (error) {
         console.error('Error saving message:', {
           error: error instanceof Error ? error.message : error,
           stack: error instanceof Error ? error.stack : undefined,
         });
         return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
       }
     }

     export async function GET(request: Request) {
       try {
         const { searchParams } = new URL(request.url);
         const userId = searchParams.get('userId') || 'anonymous';

         const client = await clientPromise;
         const db = client.db('adalab-chatbot');
         const messages = await db
           .collection('messages')
           .find({ userId })
           .sort({ timestamp: 1 })
           .toArray();

         return NextResponse.json(messages);
       } catch (error) {
         console.error('Error fetching messages:', {
           error: error instanceof Error ? error.message : error,
           stack: error instanceof Error ? error.stack : undefined,
         });
         return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
       }
     }