import {
	addToWishListController,
	getWishListController,
} from "@/controllers/student.controller";
import { catchErrors } from "@/utils/helper";

export const GET = catchErrors(getWishListController);

export const POST = catchErrors(addToWishListController);
