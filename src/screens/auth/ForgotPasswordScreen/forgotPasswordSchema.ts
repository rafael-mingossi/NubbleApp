import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('invalid e-mail format'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
