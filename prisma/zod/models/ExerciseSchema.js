import { z } from 'zod';
import { JsonValueSchema } from '../input-schemas/JsonValueSchema'

/////////////////////////////////////////
// EXERCISE SCHEMA
/////////////////////////////////////////

export const ExerciseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  questions: JsonValueSchema.array(),
  duration: z.number(),
  order: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sectionId: z.string(),
})


/////////////////////////////////////////
// EXERCISE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ExerciseOptionalDefaultsSchema = ExerciseSchema.merge(z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}))


export default ExerciseSchema;
