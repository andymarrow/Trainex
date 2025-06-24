import { z } from 'zod';

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  expiresAt: z.date(),
  token: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  userId: z.string(),
  impersonatedBy: z.string().nullable(),
})

/////////////////////////////////////////
// SESSION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SessionOptionalDefaultsSchema = SessionSchema.merge(z.object({
}))

export default SessionSchema;
