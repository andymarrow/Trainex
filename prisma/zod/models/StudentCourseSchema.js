import { z } from 'zod';
import { JsonValueSchema } from '../input-schemas/JsonValueSchema'
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// STUDENT COURSE SCHEMA
/////////////////////////////////////////

export const StudentCourseSchema = z.object({
  id: z.string(),
  progress: z.instanceof(Prisma.Decimal, { message: "Field 'progress' must be a Decimal. Location: ['Models', 'StudentCourse']"}),
  notes: JsonValueSchema.nullable(),
  lastCheckpoint: JsonValueSchema.nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  courseId: z.string(),
  studentId: z.string(),
  certificateId: z.string().nullable(),
})


/////////////////////////////////////////
// STUDENT COURSE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StudentCourseOptionalDefaultsSchema = StudentCourseSchema.merge(z.object({
  id: z.string().optional(),
  progress: z.instanceof(Prisma.Decimal, { message: "Field 'progress' must be a Decimal. Location: ['Models', 'StudentCourse']"}).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}))


export default StudentCourseSchema;
