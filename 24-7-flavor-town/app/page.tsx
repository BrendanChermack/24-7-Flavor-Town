import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header><h1>24/7 Flavor Town</h1></header>
      <div className='flex flex-col justify-center items-center w-full p-0'>
        <div className='p-4 my-5 bg-amber-500 text-black text-1xl w-1/2 text-center'><Link href="/breakfast">Breakfast</Link></div> 
        <div className='p-4 my-5 bg-amber-500 text-black text-1xl w-1/2 text-center'><Link href="/dinner">Dinner</Link></div>
      </div>
    </main>
  )
}
