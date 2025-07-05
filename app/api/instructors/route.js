import { getInstructorsController } from "@/controllers/instructor.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(getInstructorsController);
