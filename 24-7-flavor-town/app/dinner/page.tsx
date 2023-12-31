import Link from 'next/link';
import React from 'react';
import { HomeButton } from '../_components/home';

const DinnerPage = () => {
	return (
		<main>
			<header className='grid grid-cols-3'>
				<div></div>
				<div className=''>
					<h1>Dinner</h1>
				</div>
				<div className='absolute'>
					<HomeButton />
				</div>
			</header>
			<div className='flex flex-col justify-center items-center w-full p-0 mt-10'>
				<div className='p-4 my-5 bg-amber-500 text-black text-1xl w-1/2 text-center'>
					<Link href='/dinner/fieri-pizza'>Fieri Pizza</Link>
				</div>
				<div className='p-4 my-5 bg-amber-500 text-black text-1xl w-1/2 text-center'>
					<Link href='/dinner/krabby-patty'>Krabby Patty</Link>
				</div>
			</div>
		</main>
	);
};

export default DinnerPage;
