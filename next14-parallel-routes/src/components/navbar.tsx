import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='px-10 py-4 flex space-x-6'>
      <Link href="/" className='bg-white text-black px-4 py-2 rounded-lg'>Home</Link>
      <Link href="/about" className='bg-white text-black px-4 py-2 rounded-lg'>about</Link>
    </div>
  )
}
