'use client'
import { useState, useRef, useEffect } from 'react'

export default function ChatBox(){
  const [messages, setMessages] = useState([{from:'ai', text:'Hello! I am Visa Mate AI Assistant. How can I help you today?'}])
  const [text, setText] = useState('')
  const ref = useRef()

  useEffect(()=>{ if(ref.current) ref.current.scrollTop = ref.current.scrollHeight },[messages])

  function send(){
    if(!text.trim()) return
    const userMsg = {from:'user', text}
    setMessages(m=>[...m, userMsg])
    setText('')
    // Simulated AI response
    setTimeout(()=> setMessages(m=>[...m, {from:'ai', text:'(Demo) Thanks — please upload your passport and proof of funds. For full AI responses, integrate OpenAI API.'}]),700)
  }

  return (
    <div className='flex flex-col h-80'>
      <div className='flex-1 overflow-auto p-3 space-y-2' ref={ref}>
        {messages.map((m,i)=>(<div key={i} className={m.from==='user'?'bg-blue-500 text-white p-2 rounded-lg ml-auto max-w-xs':'bg-gray-100 p-2 rounded-lg max-w-xs'}>{m.text}</div>))}
      </div>
      <div className='flex gap-2 mt-2'>
        <input className='flex-1 p-2 border rounded' value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>e.key==='Enter' && send()} placeholder='Ask Visa Mate...' />
        <button className='px-4 py-2 bg-blue-600 text-white rounded' onClick={send}>Send</button>
      </div>
    </div>
  )
}
