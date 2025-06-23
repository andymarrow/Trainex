import { getSession } from "@/lib/auth";
import {
	canCreateCourse,
	canDeleteCourse,
	canUpdateCourse,
} from "@/lib/check-permission-server";
import {
	createCourse,
	deleteCourse,
	getCourse,
	listCourses,
	searchCourses,
	updateCourse,
} from "@/services/course.service";
import createHttpError from "http-errors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const listCoursesController = async (request) => {
	const courses = await listCourses();

	return NextResponse.json({ courses });
};

export const searchCoursesController = async (request) => {
	const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')

    const courses = searchCourses(query);

	return NextResponse.json({ courses });
};

export const getCourseController = async (request, { params }) => {
	const courseId = params.courseId;

	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const course = getCourse(courseId);

	return NextResponse.json({ course });
};

export const createCourseController = async (request) => {
	const { user } = getSession(headers());

	if (!canCreateCourse(user.id)) {
		throw new createHttpError.Unauthorized(
			"You don't have enough permissions to create a course"
		);
	}

	const { courseData } = request.body;

	// TODO: generate zod schemas for course and check the course data before passing

	const course = await createCourse(courseData);

	return NextResponse.json({ course });
};

export const updateCourseController = async (request, { params }) => {
	const { user } = getSession(headers());
	const { courseId } = params;

	if (!canUpdateCourse(user.id)) {
		throw new createHttpError.Unauthorized(
			"You don't have enough permissions to update this course"
		);
	}

	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const { courseData } = request.body;

	// TODO: generate zod schemas for course and check the course data before passing

	const course = await updateCourse({ courseId, courseData });

	return NextResponse.json({ course });
};

export const deleteCourseController = async (request, { params }) => {
	const { user } = getSession(headers());
	const { courseId } = params;

	if (!canDeleteCourse(user.id)) {
		throw new createHttpError.Unauthorized(
			"You don't have enough permissions to delete this course"
		);
	}

	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const course = await deleteCourse(courseId);

	return NextResponse.json({ course });
};
