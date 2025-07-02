import { NextResponse } from 'next/server';
     import clientPromise from '@/lib/mongodb';

     export async function POST(request: Request) {
       try {
         const client = await clientPromise;
         const db = client.db('adalab-chatbot');
         const { name, email, phone, service, date, time, message } = await request.json();

         const booking = {
           name,
           email,
           phone,
           service,
           date: new Date(date),
           time,
           message,
           createdAt: new Date(),
         };

         const result = await db.collection('bookings').insertOne(booking);
         return NextResponse.json({ ...booking, _id: result.insertedId }, { status: 201 });
       } catch (error) {
         console.error('Error saving booking:', error);
         return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
       }
     }