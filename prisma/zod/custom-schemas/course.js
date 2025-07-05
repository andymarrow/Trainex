// import { CourseOptionalDefaultsSchema as CourseSchema } from "../models/CourseSchema";
import { CourseSchema } from "../models/CourseSchema";
import { SectionOptionalDefaultsSchema as SectionSchema } from "../models/SectionSchema";
import { ChapterOptionalDefaultsSchema as ChapterSchema } from "../models/ChapterSchema";
import { ExerciseOptionalDefaultsSchema as ExerciseSchema } from "../models/ExerciseSchema";
import { z } from "zod";
import { InstructorOptionalDefaultsSchema } from "../models/InstructorSchema";

const BasicInfoSchema = CourseSchema.pick({
	title: true,
	description: true,
	category: true,
	level: true,
});

const CourseGoalsSchema = CourseSchema.pick({
	courseOutcomes: true,
	roadmap: true,
	targetAudience: true,
	tags: true,
});

const curriculumSection = SectionSchema.extend({
	chapters: z.array(ChapterSchema.omit({ sectionId: true })),
	exercises: z.array(ExerciseSchema.omit({ sectionId: true })),
}).omit({ courseId: true });

const CurriculumSchema = z.object({
	sections: z.array(curriculumSection),
});

const MediaSchema = z.object({
	courseImage: z.object({
		url: CourseSchema.shape.thumbnail,
	}),
});

export const CustomCourseSchema = z.object({
	basicInfo: BasicInfoSchema,
	courseGoals: CourseGoalsSchema,
	curriculum: CurriculumSchema,
	media: MediaSchema,
	price: CourseSchema.pick({ price: true }),
});

// Flat schema
export const FlatCourseSchema = z.object({
	// basicInfo fields
	title: CourseSchema.shape.title,
	duration: CourseSchema.shape.duration,
	description: CourseSchema.shape.description,
	category: CourseSchema.shape.category,
	level: CourseSchema.shape.level,

	// courseGoals fields
	outcomes: CourseSchema.shape.courseOutcomes,
	requirements: CourseSchema.shape.roadmap,
	audience: CourseSchema.shape.targetAudience,
	tags: CourseSchema.shape.tags.optional(),

	// media field
	// courseImage: CourseSchema.shape.thumbnail,
	media: MediaSchema,
	// price
	price: CourseSchema.shape.price,

	// curriculum sections (still nested)
	sections: z.array(curriculumSection),

	instructorId: z.string(),
});
