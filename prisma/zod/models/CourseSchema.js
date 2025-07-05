import { z } from "zod";
import { JsonValueSchema } from "../input-schemas/JsonValueSchema";
import { Prisma } from "@prisma/client";
import { CourseLevelSchema } from "../input-schemas/CourseLevelSchema";

/////////////////////////////////////////
// COURSE SCHEMA
/////////////////////////////////////////

export const CourseSchema = z.object({
	level: CourseLevelSchema,
	id: z.string(),
	title: z.string(),
	description: z.string(),
	category: z.string(),
	rating: z.instanceof(Prisma.Decimal, {
		message:
			"Field 'rating' must be a Decimal. Location: ['Models', 'Course']",
	}),
	reviewsCount: z.number(),
	thumbnail: z.string(),
	price: z.number(),
	tags: z.string().array().nullable(),
	duration: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
	instructorId: z.string(),
	targetAudience: JsonValueSchema.nullable(),
	roadmap: JsonValueSchema.nullable(),
	courseOutcomes: JsonValueSchema.nullable(),
});

/////////////////////////////////////////
// COURSE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CourseOptionalDefaultsSchema = CourseSchema.merge(
	z.object({
		id: z.string().optional(),
		rating: z
			.instanceof(Prisma.Decimal, {
				message:
					"Field 'rating' must be a Decimal. Location: ['Models', 'Course']",
			})
			.optional(),
		reviewsCount: z.number().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	})
);

export default CourseSchema;
