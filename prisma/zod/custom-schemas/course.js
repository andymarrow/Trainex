import { CourseOptionalDefaultsSchema as CourseSchema } from "../models/CourseSchema";
import { SectionOptionalDefaultsSchema as SectionSchema } from "../models/SectionSchema";
import { ChapterOptionalDefaultsSchema as ChapterSchema } from "../models/ChapterSchema";
import { ExerciseOptionalDefaultsSchema as ExerciseSchema } from "../models/ExerciseSchema";

const BasicInfoSchema = CourseSchema.pick({
	title,
	description,
	category,
	level,
});

const CourseGoalsSchema = CourseSchema.pick({
	courseOutcomes,
	roadmap,
	targetAudience,
	tags,
});

const curriculumSection = SectionSchema.extend({
	chapters: z.array(ChapterSchema.omit({ sectionId: true })),
	exercises: z.array(ExerciseSchema.omit({ sectionId: true })),
}).omit({ courseId: true });

const CurriculumSchema = {
	sections: z.array(curriculumSection),
};

const MediaSchema = CourseSchema.pick({
	thumbnail: true,
});

export const CustomCourseSchema = z.object({
	basicInfo: BasicInfoSchema,
	courseGoals: CourseGoalsSchema,
	curriculum: CurriculumSchema,
	media: MediaSchema,
	price: CourseSchema.pick({ price: true }),
});
