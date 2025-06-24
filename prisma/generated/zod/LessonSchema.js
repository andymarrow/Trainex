import { z } from 'zod';

/////////////////////////////////////////
// LESSON SCHEMA
/////////////////////////////////////////

export const LessonSchema = z.object({
  id: z.string(),
  title: z.string(),
  moduleId: z.string(),
  order: z.number(),
})

/////////////////////////////////////////
// LESSON OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LessonOptionalDefaultsSchema = LessonSchema.merge(z.object({
  id: z.string().optional(),
}))

export default LessonSchema;
