import { authClient } from "./auth-client";

export const canCreateCourse = authClient.admin.checkRolePermission({
	permissions: {
		course: ["create"],
	},
});

export const canCreateUser = authClient.admin.checkRolePermission({
	permissions: {
		user: ["create"],
	},
	role: "admin",
});

export const canEnrollCourse = authClient.admin.checkRolePermission({
	permission: {
		course: ["enroll"],
	},
});
