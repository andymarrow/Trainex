import { enrollStudentController } from "@/controllers/student.controller";
import { catchErrors } from "@/utils/helper";

export const POST = catchErrors(enrollStudentController)