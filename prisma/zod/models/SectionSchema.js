import { z } from 'zod';

/////////////////////////////////////////
// SECTION SCHEMA
/////////////////////////////////////////

export const SectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  courseId: z.string(),
  order: z.number(),
})


/////////////////////////////////////////
// SECTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SectionOptionalDefaultsSchema = SectionSchema.merge(z.object({
  id: z.string().optional(),
}))


export default SectionSchema;
