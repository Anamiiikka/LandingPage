import { NextResponse } from 'next/server';
     import clientPromise from '@/lib/mongodb';

     // Force dynamic rendering to prevent static generation
     export const dynamic = 'force-dynamic';

     export async function POST(request: Request) {
       try {
         const client = await clientPromise;
         const db = client.db('adalab-chatbot');
         const { name, email, phone, message } = await request.json();

         const contact = {
           name,
           email,
           phone,
           message,
           createdAt: new Date(),
         };

         const result = await db.collection('contacts').insertOne(contact);
         return NextResponse.json({ ...contact, _id: result.insertedId }, { status: 201 });
       } catch (error) {
         console.error('Error saving contact:', {
           error: error instanceof Error ? error.message : error,
           stack: error instanceof Error ? error.stack : undefined,
         });
         return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 });
       }
     }