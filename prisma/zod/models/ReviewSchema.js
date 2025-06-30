import { z } from 'zod';

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

export const ReviewSchema = z.object({
  id: z.string(),
  userId: z.string(),
  courseId: z.string(),
  rating: z.number(),
  comment: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})


/////////////////////////////////////////
// REVIEW OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ReviewOptionalDefaultsSchema = ReviewSchema.merge(z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}))


export default ReviewSchema;
