import { z } from 'zod';

export const PaymentMethodSchema = z.enum(['CBE','TeleBirr','Stripe']);


export default PaymentMethodSchema;
