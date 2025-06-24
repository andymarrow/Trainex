import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// QUIZ SCHEMA
/////////////////////////////////////////

export const QuizSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  questions: JsonValueSchema.array(),
  duration: z.number(),
  order: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  moduleId: z.string(),
})

/////////////////////////////////////////
// QUIZ OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const QuizOptionalDefaultsSchema = QuizSchema.merge(z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
}))

export default QuizSchema;
