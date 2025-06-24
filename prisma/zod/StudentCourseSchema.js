import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// STUDENT COURSE SCHEMA
/////////////////////////////////////////

export const StudentCourseSchema = z.object({
  id: z.string(),
  progress: z.number(),
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
  progress: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}))


export default StudentCourseSchema;
