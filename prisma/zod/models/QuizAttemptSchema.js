import { z } from 'zod';
import { JsonValueSchema } from '../input-schemas/JsonValueSchema'

/////////////////////////////////////////
// QUIZ ATTEMPT SCHEMA
/////////////////////////////////////////

export const QuizAttemptSchema = z.object({
  id: z.string(),
  score: z.number().nullable(),
  answers: JsonValueSchema,
  completedAt: z.date(),
  studentId: z.string(),
  quizId: z.string(),
})


/////////////////////////////////////////
// QUIZ ATTEMPT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const QuizAttemptOptionalDefaultsSchema = QuizAttemptSchema.merge(z.object({
  id: z.string().optional(),
  completedAt: z.date().optional(),
}))


export default QuizAttemptSchema;
