import { admin } from "./auth-client";

export const canCreateCourse = await admin.hasPermission({
	permissions: {
		course: ["create"],
	},
});

export const canCreateUser = await admin.hasPermission({
	permissions: {
		user: ["create"],
	},
});

export const canEnrollCourse = await admin.hasPermission({
	permission: {
		course: ["enroll"],
	},
});

export const isAdmin = (user) => user.role === "admin"
export const isInstructor = (user) => user.role === "instructor"
export const isStudent = (user) => user.role === "student"
