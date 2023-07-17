import { z } from 'zod';

// error messages
const EmailMessages = {
  empty: 'Enter email',
  invalid: 'invalid email address',
};

const PasswordMessages = {
  empty: 'Enter password',
  min: 'password must be at least 3 characters',
  max: 'password must be no more than 8 characters',
};

// validation  schemes
const email = z.string().trim().nonempty(EmailMessages.empty).email(EmailMessages.invalid);

const password = z
  .string()
  .trim()
  .nonempty(PasswordMessages.empty)
  .min(3, PasswordMessages.min)
  .max(8, PasswordMessages.max);

const confirmPassword = z
  .string()
  .trim()
  .nonempty(PasswordMessages.empty)
  .min(3, PasswordMessages.min)
  .max(8, PasswordMessages.max);

const rememberMe = z.boolean();

// result schemes
export const signInSchema = z.object({ email, password, rememberMe });

export const registrationSchema = z
  .object({ email, password, confirmPassword })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

// types
export type SignInFormData = z.infer<typeof signInSchema>;
export type RegistrationFormData = z.infer<typeof registrationSchema>;
