import React from 'react'
import blob from '../../public/blob.svg'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <nav className='mx-auto max-w-6xl px-8'>
      <div className='flex justify-between p-2'>
        <Image src={blob} alt='logo' width='100' height='100'></Image>
        <Link href={'/signIn'} className='btn text-zinc-800'>sign in</Link>
      </div>
    </nav>
  )
}

export default Header