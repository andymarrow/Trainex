// import prisma from "@/lib/prisma"
import { PrismaClient } from "@prisma/client";

// Enable the two comments above and below for prisma intellisense in javascript

const prisma = new PrismaClient();

// GET Actions
export const getInstructors = async (userId) => {
	return prisma.instructor.findMany({
		include: {
			user: {
				select: {
					name: true,
				},
			},
		},
	});
};

// POST Actions
export const createInstructor = async (data) => {
	return prisma.instructor.create({
		data: data,
	});
};
