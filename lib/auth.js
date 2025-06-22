import { betterAuth } from "better-auth";
import { admin, createAuthMiddleware } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { adminRole, instructor, student, ac } from "./permissions.js";
import prisma from "./prisma.js";
import { createStudent } from "@/services/student.services.js";

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
			prompt: "select_account",
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
	hooks: {
		after: createAuthMiddleware( async (ctx)=> {
			if (ctx.path.startsWith("/sign-up")) {
				const session = ctx.context.newSession
				if (session) {
					// Create student with that id
					await createStudent(session.user.id);
				}
			}
		})
	}
});


export const getSession = async (headers) => auth.api.getSession({headers});