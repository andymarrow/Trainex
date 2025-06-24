import { getEnrolledCoursesController } from "@/controllers/student.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(getEnrolledCoursesController)