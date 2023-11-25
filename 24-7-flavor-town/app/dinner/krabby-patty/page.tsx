import Link from 'next/link'
import React from 'react'

const KrabbyPatty = () => {
  return (
    <main>
      <div className='foodHeader grid grid-cols-3'>
        <div><Link href="/dinner">Back</Link></div>
        <div>Krabby Patty</div>
        <div><Link href="/">Home</Link></div>
      </div>
    </main>
    
  )
}

export default KrabbyPatty