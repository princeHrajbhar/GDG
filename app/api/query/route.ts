import { NextRequest, NextResponse } from 'next/server'
import fetch from 'node-fetch'

export async function POST(request: NextRequest) {
  const { question } = await request.json()

  const API_KEY = process.env.GEMINI_API_KEY
  if (!API_KEY) {
    return NextResponse.json({ error: 'Gemini API key not configured.' }, { status: 500 })
  }

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: question }] }]
      }),
    })

    const data = await res.json()

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, no response from Gemini.'

    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Gemini API Error:', error)
    return NextResponse.json({ error: 'Failed to fetch response from Gemini API.' }, { status: 500 })
  }
}
