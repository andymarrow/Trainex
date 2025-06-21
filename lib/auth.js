import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma.js";
import { adminRole, instructor, student, ac } from "./permissions.js";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		},
	},
	plugins: [
		admin({
			ac,
			roles: {
				student,
				instructor,
				admin: adminRole,
			},
			defaultRole: "student",
			adminRoles: ["admin"],
		}),
	],
});
