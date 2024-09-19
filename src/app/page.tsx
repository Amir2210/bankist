import { BackgroundBeamsWithCollisionDemo } from '@/components/BackgroundBeamsWithCollisionDemo';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className='h-screen overflow-y-hidden bg-gradient-to-b from-white to-purple-100'>
      <Header />
      <BackgroundBeamsWithCollisionDemo />
    </main>
  )
}
