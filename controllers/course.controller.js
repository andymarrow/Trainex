import { getSession } from "@/lib/auth";
import {
	canCreateCourse,
	canDeleteCourse,
	canUpdateCourse,
} from "@/lib/check-permission-server";
import { FlatCourseSchema } from "@/prisma/zod/custom-schemas/course";
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
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("query");

	const courses = await searchCourses(query);

	return NextResponse.json({ courses });
};

export const getCourseController = async (request, { params }) => {
	const { courseId } = await params;
	console.log(courseId);
	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const course = await getCourse(courseId);

	return NextResponse.json({ course });
};

export const createCourseController = async (request) => {
	const { user } = getSession(await headers());
	const formdata = await request.formData();

	const courseData = {};
	for (const [key, value] of formdata.entries()) {
		if (typeof value === "string") {
			// Check if it's a JSON string field (like your "data" field)
			try {
				courseData[key] = JSON.parse(value);
			} catch {
				courseData[key] = value;
			}
		} else {
			//TODO: Since it's likely a File store it in a storage or something or change it to base64
			//TODO: Also handle videos to be uploaded to vimeo
			courseData[key] = value;
		}
	}
	const result = FlatCourseSchema.safeParse(courseData.data);

	if (!canCreateCourse(user.id)) {
		throw new createHttpError.Unauthorized(
			"You don't have enough permissions to create a course"
		);
	}

	const course = await createCourse({
		level: result.data.level,
		title: result.data.title,
		description: result.data.description,
		category: result.data.category,
		price: result.data.price,
		tags: result.data.tags || [],
		duration: result.data.duration,
		instructorId: result.data.instructorId,
		roadmap: result.data.requirements,
		thumbnail: result.data.media.courseImage.url,
		courseOutcomes: result.data.outcomes,
		targetAudience: result.data.audience,
	});

	return NextResponse.json({ course });
};

export const updateCourseController = async (request, { params }) => {
	const { user } = await getSession(headers());
	const { courseId } = params;

	if (!canUpdateCourse(user.id)) {
		throw new createHttpError.Unauthorized(
			"You don't have enough permissions to update this course"
		);
	}

	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const { courseData } = await request.json();

	// TODO: generate zod schemas for course and check the course data before passing

	const course = await updateCourse({ courseId, courseData });

	return NextResponse.json({ course });
};

export const deleteCourseController = async (request, { params }) => {
	const { user } = await getSession(headers());
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
