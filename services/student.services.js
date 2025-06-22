import prisma from "@/lib/prisma"
// import { PrismaClient } from "@prisma/client"

// Enable the two comments above and below for prisma intellisense in javascript

// const prisma = new PrismaClient()

// GET Actions
export const getWishList = async (userId) => {
    return prisma.student.findUnique({
        where: {
            userId
        },
        select: {
            wishList: true,
        }
    })
}

export const getEnrolledCourses = async (userId) => {
    return prisma.student.findUnique({
        where: {
            userId,
        },
        select: {
            enrolledCourses: true,
        }
    })
}

export const getPaymentHistory = async (userId) => {
    return prisma.student.findUnique({
        where: {
            userId,
        },
        select: {
            PaymentHistory: true,
        }
    })
}

export const getStudentId = async (userId) => {
    return prisma.student.findUnique({
        where: {
            userId
        },
        select: {
            id: true,
        }
    })
}

// POST Actions
export const createStudent = async (userId) => {
    return prisma.student.create({
        data: {
            userId,
        }
    })
}


export const enrollStudent = async ({userId, courseId}) => {
    const { id:studentId } = await getStudentId(userId)

    return prisma.studentCourse.create({
        data: {
            courseId,
            studentId,
        }
    })
}

// PUT Actions
export const addToWishList = async ({userId, courseId}) => {
    return prisma.student.update({
        where: {
            userId,
        },
        data: {
            wishList: {
                connect: {id: courseId}
            }
        }
    })
}