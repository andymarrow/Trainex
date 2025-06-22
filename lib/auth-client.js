import { createAuthClient } from "better-auth/client";
import { adminClient } from "better-auth/client/plugins";
import { adminRole, instructor, student, ac } from "./permissions";

export const { signIn, signUp, useSession, requestPasswordReset, signOut, admin } =
	createAuthClient({
		baseURL: process.env.BASE_URL || "http://localhost:3000",
		plugins: [
			adminClient({
				ac,
				roles: { student, instructor, admin: adminRole },
			}),
		],
	});
