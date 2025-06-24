import { z } from 'zod';

/////////////////////////////////////////
// MODULE SCHEMA
/////////////////////////////////////////

export const ModuleSchema = z.object({
  id: z.string(),
  title: z.string(),
  courseId: z.string(),
  order: z.number(),
})

/////////////////////////////////////////
// MODULE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ModuleOptionalDefaultsSchema = ModuleSchema.merge(z.object({
  id: z.string().optional(),
}))

export default ModuleSchema;
