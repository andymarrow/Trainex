import { z } from 'zod';

/////////////////////////////////////////
// VERIFICATION SCHEMA
/////////////////////////////////////////

export const VerificationSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.date(),
  createdAt: z.date().nullable(),
  updatedAt: z.date().nullable(),
})


/////////////////////////////////////////
// VERIFICATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const VerificationOptionalDefaultsSchema = VerificationSchema.merge(z.object({
}))


export default VerificationSchema;
