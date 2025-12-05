'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function Login(){
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  function handleLogin(e){
    e.preventDefault()
    // demo credentials
    if(email==='user@visamate.com' && password==='demo123'){
      if(typeof window!=='undefined') sessionStorage.setItem('visa_user', JSON.stringify({email}))
      router.push('/dashboard')
    } else {
      alert('Use demo credentials: user@visamate.com / demo123')
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-50'>
      <form onSubmit={handleLogin} className='bg-white p-8 rounded-2xl shadow-xl w-96'>
        <h2 className='text-2xl font-bold text-blue-600 mb-6 text-center'>Login to Visa Mate</h2>
        <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full mb-4 p-3 border rounded-lg' required />
        <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full mb-6 p-3 border rounded-lg' required />
        <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700'>Login</button>
        <p className='mt-4 text-sm text-gray-500'>Demo account: <strong>user@visamate.com</strong> / <strong>demo123</strong></p>
      </form>
    </div>
  )
}
