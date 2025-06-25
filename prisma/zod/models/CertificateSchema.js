import { z } from 'zod';

/////////////////////////////////////////
// CERTIFICATE SCHEMA
/////////////////////////////////////////

export const CertificateSchema = z.object({
  id: z.string(),
  issuedAt: z.date(),
  fileUrl: z.string(),
  studentCourseId: z.string(),
})


/////////////////////////////////////////
// CERTIFICATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CertificateOptionalDefaultsSchema = CertificateSchema.merge(z.object({
  id: z.string().optional(),
  issuedAt: z.date().optional(),
}))


export default CertificateSchema;
