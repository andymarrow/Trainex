import { getSession } from "@/lib/auth";
import {
  canCreateUser,
  canDeleteUser,
  canUpdateUser,
} from "@/lib/check-permission-server";
import {
  createUser,
  deleteUser,
  getUser,
  listUsers,
  searchUsers,
  updateUser,
} from "@/services/user.service";
import createHttpError from "http-errors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const listUsersController = async (request) => {
  const users = await listUsers();
  return NextResponse.json({ users });
};

export const searchUsersController = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const users = await searchUsers(query);
  return NextResponse.json({ users });
};

export const getUserController = async (request, { params }) => {
  const userId = params.userId;
  if (!userId) {
    throw new createHttpError.BadRequest("Invalid user id");
  }
  const user = await getUser(userId);
  return NextResponse.json({ user });
};

export const createUserController = async (request) => {
  // const { user } = getSession(headers());
  // if (!canCreateUser(user.id)) {
  //   throw new createHttpError.Unauthorized(
  //     "You don't have enough permissions to create a user"
  //   );
  // }
  console.log("Creating user...");

  const { userData } = await request.json(); // <-- FIXED
  console.log(userData);

  // TODO: validate userData with zod
  const newUser = await createUser(userData);

  return NextResponse.json({ user: newUser });
};

export const updateUserController = async (request, { params }) => {
  const { user } = getSession(headers());
  const { userId } = params;
  if (!canUpdateUser(user.id)) {
    throw new createHttpError.Unauthorized(
      "You don't have enough permissions to update this user"
    );
  }
  if (!userId) {
    throw new createHttpError.BadRequest("Invalid user id");
  }
  const { userData } = request.body;
  // TODO: validate userData with zod
  const updatedUser = await updateUser({ userId, userData });
  return NextResponse.json({ user: updatedUser });
};

export const deleteUserController = async (request, { params }) => {
  const { user } = getSession(headers());
  const { userId } = params;
  if (!canDeleteUser(user.id)) {
    throw new createHttpError.Unauthorized(
      "You don't have enough permissions to delete this user"
    );
  }
  if (!userId) {
    throw new createHttpError.BadRequest("Invalid user id");
  }
  const deletedUser = await deleteUser(userId);
  return NextResponse.json({ user: deletedUser });
};
