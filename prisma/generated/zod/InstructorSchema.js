import { z } from 'zod';

/////////////////////////////////////////
// INSTRUCTOR SCHEMA
/////////////////////////////////////////

export const InstructorSchema = z.object({
  id: z.string(),
  bio: z.string(),
  experience: z.string(),
  education: z.string(),
  userId: z.string(),
})

/////////////////////////////////////////
// INSTRUCTOR OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InstructorOptionalDefaultsSchema = InstructorSchema.merge(z.object({
  id: z.string().optional(),
}))

export default InstructorSchema;
