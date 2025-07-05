import { getInstructors } from "@/services/instructor.service";
import { NextResponse } from "next/server";

export const getInstructorsController = async (request) => {
	// const session = await getSession(headers())

	// if (!session || !session.user || !isStudent(session.user)) {
	//     throw new createHttpError.Unauthorized();
	// }

	const instructors = await getInstructors();

	return NextResponse.json({ instructors });
};
