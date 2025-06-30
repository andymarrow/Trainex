import { auth } from "./auth";

const checkPermission = async ({ userId, permission }) => {
	return await auth.api.userHasPermission({
		body: {
			userId,
			permission,
		},
	});
};

export const canCreateCourse = async (userId) =>
	await checkPermission({
		userId,
		permission: {
			course: ["create"],
		},
	});

export const canUpdateCourse = async (userId) =>
	await checkPermission({
		userId,
		permission: {
			course: ["update"],
		},
	});

export const canDeleteCourse = async (userId) =>
	await checkPermission({
		userId,
		permission: {
			course: ["delete"],
		},
	});

export const canCreateUser = async (userId) =>
	await checkPermission({
		userId,
		permission: {
			user: ["create"],
		},
	});

export const canUpdateUser = async (userId) =>
	await checkPermission({
		userId,
		permission: {
			user: ["update"],
		},
	});

export const canDeleteUser = async (userId) =>
	await checkPermission({
		userId,
		permission: {
			user: ["delete"],
		},
	});

export const canEnrollCourse = async (userId) =>
	await checkPermission({
		userId,
		permission: {
			course: ["enroll"],
		},
	});

export const isAdmin = (user) => user.role === "admin";
export const isInstructor = (user) => user.role === "instructor";
export const isStudent = (user) => user.role === "student";
