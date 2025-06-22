import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// GET Actions
export const getCourse = async (courseId) => {
    return prisma.course.findUnique({
        where: courseId,
        include: {
            modules: true,
            instructor: {
                include: {
                    user: {
                        select: {
                            name: true,
                            image: true,
                        }
                    }
                }
            }
        }
    })
}

export const listCourses = async () => {
    return prisma.course.findMany({
        include: {
            instructor: {
                include: {
                    user: {
                        select: {
                            name: true,
                            image: true,
                        }
                    }
                }
            }
        }
    });
}

// POST Actions
export const createCourse = async (courseData)=>{
    return prisma.course.create({
        data: courseData
    })
}