import {
  deleteUserController,
  getUserController,
  updateUserController,
} from "@/controllers/user.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(getUserController);
export const PUT = catchErrors(updateUserController);
export const DELETE = catchErrors(deleteUserController);
