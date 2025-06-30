import {
  listUsersController,
  createUserController,
  searchUsersController,
} from "@/controllers/user.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(listUsersController); // Or searchUsersController if you want search by query param
export const POST = catchErrors(createUserController);
