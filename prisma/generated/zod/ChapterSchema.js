import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// CHAPTER SCHEMA
/////////////////////////////////////////

export const ChapterSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: JsonValueSchema,
  lessonId: z.string(),
  order: z.number(),
})

/////////////////////////////////////////
// CHAPTER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ChapterOptionalDefaultsSchema = ChapterSchema.merge(z.object({
  id: z.string().optional(),
}))

export default ChapterSchema;
