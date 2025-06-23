import { searchCoursesController } from "@/controllers/course.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(searchCoursesController);
