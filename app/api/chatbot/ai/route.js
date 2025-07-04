import { Groq } from 'groq-sdk';
import { NextResponse } from 'next/server';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.1-8b-instant",
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: true, // Enable streaming
      stop: null,
    });

    // Set response headers for streaming
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of chatCompletion) {
          const content = chunk.choices[0]?.delta?.content || '';
          controller.enqueue(content);
        }
        controller.close();
      },
    });

    return new NextResponse(stream, {
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return NextResponse.json({
      error: 'Failed to fetch AI response',
      text: 'Sorry, I encountered an error. Please try again or contact support.',
      options: ["Contact Support", "Back to Menu"],
    }, { status: 500 });
  }
}