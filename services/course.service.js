import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET Actions
export const getCourse = async (courseId) => {
	return prisma.course.findUnique({
		where: { id: courseId },
		include: {
			modules: true,
			instructor: {
				include: {
					user: {
						select: {
							name: true,
							image: true,
						},
					},
				},
			},
		},
	});
};

export const searchCourses = async (searchPhrase) => {
	return prisma.course.findMany({
		where: {
			title: {
				contains: searchPhrase,
				mode: "insensitive"
			},
		},
	});
};

export const listCourses = async () => {
	return prisma.course.findMany({
		include: {
			instructor: {
				include: {
					user: {
						select: {
							name: true,
							image: true,
						},
					},
				},
			},
		},
	});
};

// POST Actions
export const createCourse = async (courseData) => {
	return prisma.course.create({
		data: courseData,
	});
};

export const updateCourse = async ({ courseId, courseData }) => {
	return prisma.course.update({
		where: {
			id: courseId,
		},
		data: courseData,
	});
};

export const deleteCourse = async (courseId) => {
	return prisma.course.delete({
		where: {
			id: courseId,
		},
	});
};
