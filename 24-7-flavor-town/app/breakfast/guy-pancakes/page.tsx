import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/lib/db';

const GuyCakes = async () => {
	const foods = await db.food.findUnique({
		where: {
			id: '1',
		},
	});
	return (
		<main>
			<span className='bg-lime-500 float-right p-1 m-2 top-0 z-50'>
				<Link href='/'>Home</Link>
			</span>
			<span className=' text-white text-1xl w-1/2 text-center'>
				{foods ? foods.title : 'Database Error'}
			</span>

			<span className='bg-lime-500 float-left p-1 m-2 top-0 z-50'>
				<Link href='/breakfast'>Back</Link>
			</span>
			<Image
				src={foods ? foods.img : 'Database Error'}
				alt='pancake'
				width={700}
				height={500}
			/>
			<p>{foods ? foods.description : 'Database Error'}</p>
		</main>
	);
};

export default GuyCakes;
