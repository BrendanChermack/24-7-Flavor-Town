import Link from 'next/link'
import React from 'react'

const BreakfastMain = () => {
  return (
    <main>
        <header>
            <h1>Breakfast</h1>
            <div className="bg-lime-500 float-right p-1 m-2 top-0 z-50"><Link href="/">Home</Link></div>
        </header>
        <div className='flex flex-col justify-center items-center w-full p-0'>
        <div className='p-4 my-5 bg-amber-500 text-black text-1xl w-1/2 text-center'><Link href="/breakfast/guy-pancakes">Guy Cakes</Link> </div> 
        <div className='p-4 my-5 bg-amber-500 text-black text-1xl w-1/2 text-center'><Link href="/breakfast/waffles">Waffles</Link> </div>
        </div>
    </main>
  )
}

export default BreakfastMain