import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { CourseLevelSchema } from '../input-schemas/CourseLevelSchema'

/////////////////////////////////////////
// COURSE SCHEMA
/////////////////////////////////////////

export const CourseSchema = z.object({
  level: CourseLevelSchema,
  id: z.string(),
  title: z.string(),
  description: z.string(),
  rating: z.number(),
  thumbnail: z.string(),
  price: z.instanceof(Prisma.Decimal, { message: "Field 'price' must be a Decimal. Location: ['Models', 'Course']"}),
  tags: z.string().array(),
  duration: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  instructorId: z.string(),
})


/////////////////////////////////////////
// COURSE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CourseOptionalDefaultsSchema = CourseSchema.merge(z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}))


export default CourseSchema;
