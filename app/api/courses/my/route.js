import { getEnrolledCourses } from "@/services/student.services";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(getEnrolledCourses)