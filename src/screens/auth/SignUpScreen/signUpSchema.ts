import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'invalid username').toLowerCase(),
  firstName: z
    .string()
    .min(2, 'name is too short')
    .max(50, 'name is too long')
    .transform(stringUtils.capitaliseFirstLetter),
  lastName: z
    .string()
    .min(2, 'name is too short')
    .max(50, 'name is too long')
    .transform(stringUtils.capitaliseFirstLetter),
  email: z.string().email('invalid e-mail format'),
  password: z.string().min(6, 'length should be greater than 6'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
