import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main className='h-screen overflow-y-hidden bg-gradient-to-b from-white to-purple-100 '>
      <Header location={'register'} />
      <section className='flex flex-col justify-center items-center px-10'>
        <form className='sm:bg-white sm:px-11 py-8 rounded-lg sm:border-solid sm:border-y-4 sm:border-t-purple-400 sm:shadow-xl'>
          <Link href={'/'} className=' flex justify-center items-center'>
            <h1 className="mb-8 bg-clip-text text-transparent gradient-bg text-4xl font-bold tracking-wide">
              Bankist
            </h1>
          </Link>
          <label className="input input-bordered flex items-center gap-2 my-3 w-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow " placeholder="Username" name='userName' required />
          </label>
          <label className="input input-bordered flex items-center gap-2 my-3 w-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder="Password" name='password' required />
          </label>
          <label className="input input-bordered flex items-center gap-2 my-3 w-full bg-white">
            <input type="text" className="grow" placeholder="Full name" name='fullName' required />
          </label>
          <button className='flex mx-auto capitalize my-3 py-1 bg-clip-text text-transparent gradient-bg text-3xl font-bold tracking-wide'>Register</button>
          <span className='text-lg'>Already a member? <Link className='capitalize bg-clip-text text-transparent gradient-bg  font-medium' href={'/logIn'}> Login</Link></span>
        </form>
      </section>

    </main>
  )
}

export default page