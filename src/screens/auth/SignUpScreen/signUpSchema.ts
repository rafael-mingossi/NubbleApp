import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'invalid username').toLowerCase(),
  fullName: z
    .string()
    .min(2, 'name is too short')
    .max(50, 'name is too long')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  email: z.string().email('invalid e-mail format'),
  password: z.string().min(6, 'length should be greater than 6'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
