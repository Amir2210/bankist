import React from 'react'
import blob from '../../public/blob.svg'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <nav className='mx-auto max-w-6xl px-2 sm:pb-0 pb-10'>
      <div className='flex justify-between items-center p-2'>
        <Image src={blob} alt='logo' width='100' height='100'></Image>
        <Link href={'/signIn'} className='btn text-zinc-800 outline-purple-400 outline bg-white hover:bg-zinc-100'>Login / Register</Link>
      </div>
    </nav>
  )
}

export default Header