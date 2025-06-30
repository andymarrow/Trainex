import { getSession } from "@/lib/auth";
import { isStudent } from "@/lib/check-permission-server";
import {
	addToWishList,
	enrollStudent,
	getEnrolledCourses,
	getPaymentHistory,
	getWishList,
} from "@/services/student.services";
import createHttpError from "http-errors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const getWishListController = async (request) => {
	const session = await getSession(headers());

	if (!session || !session.user || !isStudent(session.user)) {
		throw new createHttpError.Unauthorized();
	}

	const wishList = await getWishList(session.user.id);

	return NextResponse.json({ wishList });
};

// Could be wrong check before applying
export const addToWishListController = async (request) => {
	const session = await getSession(headers());

	if (!session || !session.user || !isStudent(session.user)) {
		throw new createHttpError.Unauthorized();
	}

	const { courseId } = await request.json();

	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const wishList = await addToWishList({ userId: session.user.id, courseId });

	return NextResponse.json({ wishList });
};

export const getEnrolledCoursesController = async (request) => {
	const session = await getSession(headers())

	if (!session || !session.user || !isStudent(session.user)) {
		throw new createHttpError.Unauthorized();
	}

	const courses = await getEnrolledCourses(session.user.id);

	return NextResponse.json({ courses });
};

export const getPaymentHistoryController = async (request) => {
	const session = await getSession(headers())

	if (!session || !session.user || !isStudent(session.user)) {
		throw new createHttpError.Unauthorized();
	}

	const paymentHistory = await getPaymentHistory(session.user.id);

	return NextResponse.json({ paymentHistory });
};

export const enrollStudentController = async (request, { params }) => {
	const session = await getSession(headers())
	const { courseId } = params;

	if (!session || !session.user || !isStudent(session.user)) {
		throw new createHttpError.Unauthorized();
	}

	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const enrolledCourse = await enrollStudent({ userId: session.user.id, courseId });

	return NextResponse.json({ enrolledCourse });
};
