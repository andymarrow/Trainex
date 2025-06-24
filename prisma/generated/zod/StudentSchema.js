import { z } from 'zod';

/////////////////////////////////////////
// STUDENT SCHEMA
/////////////////////////////////////////

export const StudentSchema = z.object({
  id: z.string(),
  userId: z.string(),
})

/////////////////////////////////////////
// STUDENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StudentOptionalDefaultsSchema = StudentSchema.merge(z.object({
  id: z.string().optional(),
}))

export default StudentSchema;
