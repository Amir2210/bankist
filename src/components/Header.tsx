import React from 'react'
import blob from '../../public/blob.svg'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProp {
  location: string
}

function Header({ location }: HeaderProp) {
  return (
    <nav className='mx-auto max-w-6xl px-2'>
      <div className='flex justify-between items-center p-2'>
        <Link href={'/'}><Image src={blob} alt='logo' width='100' height='100'></Image></Link>
        {location === 'main' ? <Link href={'/logIn'} className='btn sm:text-lg bg-clip-text text-transparent gradient-bg outline-purple-400 outline bg-white hover:bg-zinc-100'>Login / Register</Link> : null}

      </div>
    </nav>
  )
}

export default Header