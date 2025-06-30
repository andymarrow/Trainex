import { z } from 'zod';
import { JsonValueSchema } from '../input-schemas/JsonValueSchema'
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// EXERCISE ATTEMPT SCHEMA
/////////////////////////////////////////

export const ExerciseAttemptSchema = z.object({
  id: z.string(),
  score: z.instanceof(Prisma.Decimal, { message: "Field 'score' must be a Decimal. Location: ['Models', 'ExerciseAttempt']"}).nullable(),
  answers: JsonValueSchema,
  completedAt: z.date(),
  studentId: z.string(),
  exerciseId: z.string(),
})


/////////////////////////////////////////
// EXERCISE ATTEMPT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ExerciseAttemptOptionalDefaultsSchema = ExerciseAttemptSchema.merge(z.object({
  id: z.string().optional(),
  completedAt: z.date().optional(),
}))


export default ExerciseAttemptSchema;
