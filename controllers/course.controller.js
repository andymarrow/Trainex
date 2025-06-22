import { createCourse, getCourse, listCourses } from "@/services/course.service"
import { NextResponse } from "next/server"

// TODO: use http-errors library for more customized & verbose errors to the frontend
// TODO: also add permission checks for better security

export const listCoursesController = async (request) => {
    
    const courses = await listCourses()

    return NextResponse.json({ courses })
}

export const getCourseController = async (request, {params}) => {
    const courseId = params.courseId

    const course = getCourse(courseId);

    return NextResponse.json({course})
}

export const createCourseController = async (request) => {

    const {courseData} = request.body;

    const course = await createCourse(courseData);

    return NextResponse.json({course})
}