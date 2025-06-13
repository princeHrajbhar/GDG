"use client"
import { useState } from 'react'

export default function AskQueryPage() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    if (!question.trim()) return
    setLoading(true)
    setResponse('')

    const res = await fetch('/api/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    })

    const data = await res.json()
    setResponse(data.answer)
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">🌾 Farmer Query Assistant</h1>

      <textarea
        className="w-full max-w-lg p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        rows={4}
        placeholder="Ask your farming question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50 transition-all"
      >
        {loading ? 'Thinking...' : 'Ask Gemini'}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-white border border-green-200 rounded-lg w-full max-w-lg shadow">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Answer:</h2>
          <p className="text-gray-800">{response}</p>
        </div>
      )}
    </div>
  )
}
