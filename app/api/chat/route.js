import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are Visa Mate AI Assistant. You help users with visa questions, documents, and application steps in simple language."
          },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    return NextResponse.json({
      reply: data.choices?.[0]?.message?.content || "No response from AI."
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
