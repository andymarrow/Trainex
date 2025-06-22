import {
	createCourseController,
	listCoursesController,
} from "@/controllers/course.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(listCoursesController);

export const POST = catchErrors(createCourseController);
