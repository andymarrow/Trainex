import { z } from 'zod';

/////////////////////////////////////////
// ADMIN SCHEMA
/////////////////////////////////////////

export const AdminSchema = z.object({
  id: z.string(),
  permissions: z.string().array(),
  userId: z.string(),
})

/////////////////////////////////////////
// ADMIN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AdminOptionalDefaultsSchema = AdminSchema.merge(z.object({
  id: z.string().optional(),
}))

export default AdminSchema;
