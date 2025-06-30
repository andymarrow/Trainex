import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET Actions
export const getUser = async (userId) => {
  return prisma.user.findUnique({
    where: { id: userId },
  });
};

export const searchUsers = async (searchPhrase) => {
  return prisma.user.findMany({
    where: {
      name: {
        contains: searchPhrase,
        mode: "insensitive",
      },
    },
  });
};

export const listUsers = async () => {
  return prisma.user.findMany();
};

// POST Actions
export const createUser = async (userData) => {
  console.log("Creating user with data:-----", userData);

  return prisma.user.create({
    data: userData,
  });
};

export const updateUser = async ({ userId, userData }) => {
  return prisma.user.update({
    where: { id: userId },
    data: userData,
  });
};

export const deleteUser = async (userId) => {
  return prisma.user.delete({
    where: { id: userId },
  });
};
