import Link from 'next/link'
import React from 'react'

const Waffels = () => {
  return (
    <main>
      <div className='foodHeader grid grid-cols-3'>
        <div><Link href="/breakfast">Back</Link></div>
        <div>Waffels</div>
        <div><Link href="/">Home</Link></div>
      </div>
    </main>
  )
}

export default Waffels