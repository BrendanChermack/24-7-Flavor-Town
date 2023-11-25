import Link from 'next/link'
import React from 'react'
import { HomeButton } from '../_components/home';

const BreakfastMain = () => {
  return (
		<main>
			<header className='grid grid-cols-3'>
				<div>
					<HomeButton />
				</div>
				<div className=''>
					<h1>Breakfast</h1>
				</div>
			</header>
			<div className='flex flex-col justify-center items-center w-full p-0'>
				<div className='p-4 my-5 bg-amber-500 text-black text-1xl w-1/2 text-center'>
					<Link href='/breakfast/guy-pancakes'>Guy Cakes</Link>{' '}
				</div>
				<div className='p-4 my-5 bg-amber-500 text-black text-1xl w-1/2 text-center'>
					<Link href='/breakfast/waffles'>Waffles</Link>{' '}
				</div>
			</div>
		</main>
  );
}

export default BreakfastMain