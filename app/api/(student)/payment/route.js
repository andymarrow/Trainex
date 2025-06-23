import { getPaymentHistoryController } from "@/controllers/student.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(getPaymentHistoryController)