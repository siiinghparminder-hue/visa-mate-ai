import Link from 'next/link'
export default function Home(){
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-white text-center px-6'>
      <h1 className='text-5xl font-bold text-blue-600 mb-4'>Visa Mate AI</h1>
      <p className='text-gray-600 mb-8 max-w-xl'>
        Your Smart Visa Assistant — simplifying your visa process with AI guidance, step-by-step support, and application tracking.
      </p>
      <div className='flex gap-4'>
        <Link href='/login'><button className='px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700'>Get Started</button></Link>
        <Link href='/about'><button className='px-6 py-3 border border-blue-100 text-blue-600 rounded-xl'>About</button></Link>
      </div>
    </main>
  )
}
