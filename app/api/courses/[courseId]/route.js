import {
	deleteCourseController,
	getCourseController,
	updateCourseController,
} from "@/controllers/course.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(getCourseController);

export const PUT = catchErrors(updateCourseController);

export const DELETE = catchErrors(deleteCourseController);
