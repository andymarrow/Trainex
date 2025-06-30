import { z } from 'zod';
import { JsonValueSchema } from '../input-schemas/JsonValueSchema'

/////////////////////////////////////////
// CHAPTER SCHEMA
/////////////////////////////////////////

export const ChapterSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: JsonValueSchema,
  duration: z.number().nullable(),
  order: z.number(),
  sectionId: z.string(),
})


/////////////////////////////////////////
// CHAPTER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ChapterOptionalDefaultsSchema = ChapterSchema.merge(z.object({
  id: z.string().optional(),
}))


export default ChapterSchema;
