'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard(){
  const router = useRouter()
  const [user,setUser] = useState(null)
  useEffect(()=>{
    if(typeof window!=='undefined'){
      const u = sessionStorage.getItem('visa_user')
      if(!u) router.push('/login')
      else setUser(JSON.parse(u))
    }
  },[])
  function logout(){ if(typeof window!=='undefined'){ sessionStorage.removeItem('visa_user'); router.push('/login') } }

  return (
    <div className='min-h-screen bg-white p-6'>
      <header className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-3'><img src='/logo-blue.png' className='w-12' alt='logo' /><div><div className='text-xl font-bold text-blue-600'>Visa Mate</div><div className='text-sm text-gray-500'>AI Visa Assistant</div></div></div>
        <div className='flex items-center gap-3'><button className='btn ghost' onClick={logout}>Logout</button></div>
      </header>

      <main>
        <h1 className='text-2xl font-semibold mb-4'>Welcome{user? ', '+user.email : ''} 👋</h1>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='p-6 border rounded-2xl shadow-sm'>
            <h3 className='text-lg font-semibold mb-2'>Start Application</h3>
            <p className='text-gray-600 mb-3'>Fill basic details to start a demo application.</p>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Application submitted (demo)')}} className='flex flex-col gap-3'>
              <input placeholder='Destination Country' className='p-3 border rounded' />
              <input placeholder='Purpose of Visit' className='p-3 border rounded' />
              <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded'>Submit Application</button>
            </form>
          </div>

          <div className='p-6 border rounded-2xl shadow-sm'>
            <h3 className='text-lg font-semibold mb-2'>Upload Documents</h3>
            <p className='text-gray-600 mb-3'>Upload passport and supporting documents (demo).</p>
            <input type='file' multiple />
            <div className='mt-4'><Link href='/chat'><button className='px-4 py-2 bg-blue-600 text-white rounded'>Chat with Visa Mate AI</button></Link></div>
          </div>
        </div>

        <section className='mt-8'>
          <h3 className='text-lg font-semibold mb-3'>Application Progress</h3>
          <div className='flex gap-4'>
            <div className='p-4 bg-white border rounded shadow-sm'><strong>Submitted</strong><div className='text-sm text-gray-500'>Completed</div></div>
            <div className='p-4 bg-white border rounded shadow-sm'><strong>Review</strong><div className='text-sm text-gray-500'>In Progress</div></div>
            <div className='p-4 bg-white border rounded shadow-sm'><strong>Decision</strong><div className='text-sm text-gray-500'>Pending</div></div>
          </div>
        </section>
      </main>
    </div>
  )
}
