import { z } from 'zod';

// error messages
const EmailMessages = {
  empty: 'Enter email',
  invalid: 'invalid email address',
};

const LoginMessages = {
  empty: 'Enter login',
  min: 'login must be at least 3 characters',
  max: 'login must be no more than 12 characters',
};

const PasswordMessages = {
  empty: 'Enter password',
  min: 'password must be at least 3 characters',
  max: 'password must be no more than 8 characters',
};

// validation  schemes
const email = z.string().trim().nonempty(EmailMessages.empty).email(EmailMessages.invalid);

const login = z
  .string()
  .trim()
  .nonempty(LoginMessages.empty)
  .min(3, LoginMessages.min)
  .max(12, LoginMessages.max);

const password = z
  .string()
  .trim()
  .nonempty(PasswordMessages.empty)
  .min(3, PasswordMessages.min)
  .max(8, PasswordMessages.max);

const rememberMe = z.boolean();

// result schemes
export const loginSchema = z.object({ email, login, password, rememberMe });

// types
export type LoginForm = z.infer<typeof loginSchema>;
