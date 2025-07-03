
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import crypto from "crypto";

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Verify webhook signature (optional, for security)
    const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
    const signature = request.headers.get("calendly-webhook-signature");
    const payload = await request.json();

    if (signingKey && signature) {
      const [t, v1] = signature.split(",");
      const timestamp = t.split("=")[1];
      const hmac = crypto.createHmac("sha256", signingKey);
      hmac.update(`${timestamp}.${JSON.stringify(payload)}`);
      const computedSignature = `v1=${hmac.digest("hex")}`;
      if (computedSignature !== signature) {
        return NextResponse.json({ error: "Invalid webhook signature" }, { status: 403 });
      }
    }

    const client = await clientPromise;
    const db = client.db("adalab-chatbot");

    // Extract booking data
    const booking = {
      userId: payload.payload.invitee.email || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      inviteeEmail: payload.payload.invitee.email,
      eventType: payload.payload.event_type.name,
      startTime: new Date(payload.payload.event.start_time),
      endTime: new Date(payload.payload.event.end_time),
      createdAt: new Date(payload.created_at),
    };

    // Store in MongoDB
    await db.collection("bookings").insertOne(booking);

    return NextResponse.json({ message: "Booking saved successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}
