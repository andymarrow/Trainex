import { z } from 'zod';

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  id: z.string(),
  userId: z.string(),
  message: z.string(),
  isRead: z.boolean(),
  createdAt: z.date(),
})

/////////////////////////////////////////
// NOTIFICATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const NotificationOptionalDefaultsSchema = NotificationSchema.merge(z.object({
  id: z.string().optional(),
  isRead: z.boolean().optional(),
  createdAt: z.date().optional(),
}))

export default NotificationSchema;
