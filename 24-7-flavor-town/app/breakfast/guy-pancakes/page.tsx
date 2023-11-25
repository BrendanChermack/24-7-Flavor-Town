import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/lib/db';
import { HomeButton } from '../../_components/home';

const GuyCakes = async () => {
	const foods = await db.food.findUnique({
		where: {
			id: '1',
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
					alt='pancakes'
					width={700}
					height={500}
				/>
				<p className='mt-2 text-white'>
					{foods ? foods.description : 'Database Error'}
				</p>
			</div>
		</main>
	);
};

export default GuyCakes;
