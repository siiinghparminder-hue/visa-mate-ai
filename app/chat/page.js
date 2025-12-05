"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hello! I am Visa Mate AI Assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");

    // Add user message to chat
    const nextMessages = [...messages, { from: "user", text: userText }];
    setMessages(nextMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText })
      });

      const data = await res.json();

      const reply =
        data.reply ||
        "Sorry, I couldn't get a response from Visa Mate AI. Please try again.";

      setMessages([...nextMessages, { from: "ai", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...nextMessages,
        {
          from: "ai",
          text:
            "Sorry, something went wrong while contacting Visa Mate AI. Please try again in a moment."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-slate-200">
        {/* Header */}
        <div className="bg-blue-700 text-white px-6 py-4 rounded-t-xl flex items-center justify-between">
          <h1 className="text-lg font-semibold">
            Visa Mate AI Assistant <span className="ml-1">💬</span>
          </h1>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="h-80 px-6 py-4 overflow-y-auto space-y-3 bg-slate-50"
        >
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex ${
                m.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-xs text-sm ${
                  m.from === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-200 text-slate-800"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-xs text-slate-500">Visa Mate AI is typing…</div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-6 py-4 border-t border-slate-200">
          <input
            className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask Visa Mate about visas, documents, eligibility…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
