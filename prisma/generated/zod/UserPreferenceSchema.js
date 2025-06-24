import { z } from 'zod';

/////////////////////////////////////////
// USER PREFERENCE SCHEMA
/////////////////////////////////////////

export const UserPreferenceSchema = z.object({
  id: z.string(),
  userId: z.string(),
  darkMode: z.boolean(),
  language: z.string(),
  notifications: z.boolean(),
})

/////////////////////////////////////////
// USER PREFERENCE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserPreferenceOptionalDefaultsSchema = UserPreferenceSchema.merge(z.object({
  id: z.string().optional(),
  darkMode: z.boolean().optional(),
  language: z.string().optional(),
  notifications: z.boolean().optional(),
}))

export default UserPreferenceSchema;
