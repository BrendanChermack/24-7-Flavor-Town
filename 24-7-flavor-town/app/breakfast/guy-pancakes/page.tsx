import Link from 'next/link'
import React from 'react'

const GuyCakes = () => {
  return (
    <main>
      <div className='foodHeader grid grid-cols-3'>
        <div><Link href="/breakfast">Back</Link></div>
        <div>Guy Cakes</div>
        <div><Link href="/">Home</Link></div>
      </div>
    </main>
  )
}

export default GuyCakes