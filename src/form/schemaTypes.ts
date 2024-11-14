import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

const username = z
  .string()
  .min(5, 'username is too short')
  .regex(userNameRegex, 'invalid username')
  .toLowerCase();

const name = z
  .string()
  .min(5, 'name is too short')
  .max(50, 'name is too long')
  .transform(stringUtils.capitaliseFirstLetter);

const email = z.string().email('invalid email');

const password = z.string().min(8, 'password must have minimum 8 chars');

export const schemaTypes = {username, name, email, password};
