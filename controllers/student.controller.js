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
	const { user } = getSession(headers());

	if (!isStudent(user)) {
		throw new createHttpError.Unauthorized();
	}

	const wishList = await getWishList(user.id);

	return NextResponse.json({ wishList });
};

// Could be wrong check before applying
export const addToWishListController = async (request) => {
	const { user } = getSession(headers());

	if (!isStudent(user)) {
		throw new createHttpError.Unauthorized();
	}

	const { courseId } = request.body;

	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const wishList = await addToWishList({ userId: user.id, courseId });

	return NextResponse.json({ wishList });
};

export const getEnrolledCoursesController = async (request) => {
	const { user } = await auth.api.getSession({
		headers: headers(),
	});

	if (!isStudent(user)) {
		throw new createHttpError.Unauthorized();
	}

	const courses = await getEnrolledCourses(user.id);

	return NextResponse.json({ courses });
};

export const getPaymentHistoryController = async (request) => {
	const { user } = await auth.api.getSession({
		headers: headers(),
	});

	const paymentHistory = await getPaymentHistory(user.id);

	return NextResponse.json({ paymentHistory });
};

export const enrollStudentController = async (request, { params }) => {
	const { user } = await auth.api.getSession({
		headers: headers(),
	});
	const { courseId } = params;

	if (!isStudent(user)) {
		throw new createHttpError.Unauthorized();
	}

	if (!courseId) {
		throw new createHttpError.BadRequest("Invalid course id");
	}

	const enrolledCourse = await enrollStudent({ userId: user.id, courseId });

	return NextResponse.json({ enrolledCourse });
};
