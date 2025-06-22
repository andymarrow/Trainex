import { getSession } from "@/lib/auth"
import { addToWishList, enrollStudent, getEnrolledCourses, getPaymentHistory, getWishList } from "@/services/student.services"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

//TODO: Add http-errors library for more customized error messages to the frontend

export const getWishListController = async (request) => {
    const { user } = getSession(headers());

    const wishList = await getWishList(user.id);
    
    return NextResponse.json({wishList});
}

// Could be wrong check before applying
export const addToWishListController = async (request) => {
    const { user } = getSession(headers());
    const { courseId } = request.body;

    const wishList = await addToWishList({userId: user.id, courseId});
    
    return NextResponse.json({wishList});
}

export const getEnrolledCoursesController = async (request) => {
    const { user } = await auth.api.getSession({
        headers: headers()
    })
    const courses = await getEnrolledCourses(user.id)

    return NextResponse.json({courses})
}

export const getPaymentHistoryController = async (request) => {
    const { user } = await auth.api.getSession({
        headers: headers()
    })

    const paymentHistory = await getPaymentHistory(user.id);

    return NextResponse.json({paymentHistory})
}

export const enrollStudentController = async (request) => {
    const { user } = await auth.api.getSession({
        headers: headers()
    })

    const { courseId } = request.body;

    const enrolledCourse = await enrollStudent({userId:user.id, courseId});

    return NextResponse.json({enrolledCourse})
}