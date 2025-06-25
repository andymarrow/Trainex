import { z } from 'zod';
import { PaymentMethodSchema } from '../input-schemas/PaymentMethodSchema'

/////////////////////////////////////////
// PAYMENT HISTORY SCHEMA
/////////////////////////////////////////

export const PaymentHistorySchema = z.object({
  paymentMethod: PaymentMethodSchema,
  id: z.string(),
  paidAt: z.date(),
  couponCode: z.string().nullable(),
  studentId: z.string(),
  courseId: z.string(),
})


/////////////////////////////////////////
// PAYMENT HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PaymentHistoryOptionalDefaultsSchema = PaymentHistorySchema.merge(z.object({
  id: z.string().optional(),
  paidAt: z.date().optional(),
}))


export default PaymentHistorySchema;
