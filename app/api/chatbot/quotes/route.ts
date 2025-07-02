import { NextResponse } from 'next/server';
     import clientPromise from '@/lib/mongodb';

     // Force dynamic rendering to prevent static generation
     export const dynamic = 'force-dynamic';

     export async function POST(request: Request) {
       try {
         const client = await clientPromise;
         const db = client.db('adalab-chatbot');
         const { name, email, phone, service, budget, timeline, description } = await request.json();

         const quote = {
           name,
           email,
           phone,
           service,
           budget,
           timeline,
           description,
           createdAt: new Date(),
         };

         const result = await db.collection('quotes').insertOne(quote);
         return NextResponse.json({ ...quote, _id: result.insertedId }, { status: 201 });
       } catch (error) {
         console.error('Error saving quote:', {
           error: error instanceof Error ? error.message : error,
           stack: error instanceof Error ? error.stack : undefined,
         });
         return NextResponse.json({ error: 'Failed to save quote' }, { status: 500 });
       }
     }