import Image from "next/image"
import Link from "next/link"
export const HomeButton = () => {
    return (
		<div>
			<Link href='/'>
				<Image
					className='rounded-full border border-black'
					src='/home.jpg'
					alt='pancake'
					width={70}
					height={70}
				/>
			</Link>
		</div>
	);
}