'use client'
import dynamic from 'next/dynamic'
const ChatBox = dynamic(()=>import('../../components/ChatBox'), { ssr:false })

export default function ChatPage(){
  return (
    <div className='min-h-screen bg-blue-50 p-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-blue-600 text-white text-center py-4 font-bold text-xl rounded-t-lg'>Visa Mate AI Assistant 💬</div>
        <div className='bg-white p-6 rounded-b-lg shadow-lg'><ChatBox /></div>
      </div>
    </div>
  )
}
