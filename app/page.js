"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
      {/* Main Card */}
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">
        
        {/* Brand */}
        <h1 className="text-4xl font-bold text-blue-700">
          Home2Abroad
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg text-gray-700">
          Your Journey Abroad Starts Here
        </p>

        <p className="mt-2 text-sm text-gray-500">
          AI-powered visa guidance for study, PR, work, and global mobility.
        </p>

        {/* Powered by */}
        <p className="text-xs text-gray-400 mt-4">
          Powered by Aahana Global Ventures
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => router.push("/chat")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start AI Chat
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}
