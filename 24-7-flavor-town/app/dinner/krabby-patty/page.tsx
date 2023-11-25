import Link from 'next/link'
import React from 'react'
import { db } from '@/lib/db';
import Image from 'next/image';
import { HomeButton } from '../../_components/home';
const KrabbyPatty = async() => {
    const foods = await db.food.findUnique({
		where: {
			id: '4',
		},
	});
  return (
		<main>
			<div className='foodHeader grid grid-cols-3'>
				<div className='justify-self-start'>
					<Link href='/breakfast'>Back</Link>
				</div>
				<div className='font-bold'>
					{foods ? foods.title : 'Database Error'}
				</div>
				<div className='justify-self-end'>
					<HomeButton />
				</div>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<Image
					src={foods ? foods.img : 'Database Error'}
					alt='krabby patty'
					width={700}
					height={500}
				/>
				<p className='mt-2 text-white'>
					{foods ? foods.description : 'Database Error'}
				</p>
			</div>
		</main>
  );
}

export default KrabbyPatty