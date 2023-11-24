import Link from 'next/link'
import React from 'react'

const GuyCakes = () => {
  return (
    <main>
      <span className="bg-lime-500 float-right p-1 m-2 top-0 z-50"><Link href="/">Home</Link></span>
      <span className=' text-white text-1xl w-1/2 text-center'>GuyCakes</span>
      <span className="bg-lime-500 float-left p-1 m-2 top-0 z-50"><Link href="/breakfast">Back</Link></span>
    </main>
  )
}

export default GuyCakes