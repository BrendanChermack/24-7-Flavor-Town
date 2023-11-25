import { PrismaClient } from '@prisma/client';

declare global {
	var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
	globalThis.prisma = db;
}

async function main() {
	const newFood = await db.food.create({
		data: {
			description: 'Flour, milk, eggs, sugar, powder sugar, syrup',
			title: 'Guy Pancakes',
			img: "",
		},
	});
}
