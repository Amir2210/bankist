import Header from '@/components/Header'
import React from 'react'

function page() {
  return (
    <main className='h-screen overflow-y-hidden bg-gradient-to-b from-white to-purple-100'>
      <Header location={'register'} />
    </main>
  )
}

export default page