import { SignInPage } from '@pages/auth/sign-in';
import { SignUpPage } from '@pages/auth/sign-up';
import { ForgotPasswordPage } from '@pages/auth/forgot-password';
import { AuthPath } from './router-path';

export const unprotectedRoutes = [
  { path: AuthPath.SIGN_UP, element: <SignUpPage /> },
  { path: AuthPath.SIGN_IN, element: <SignInPage /> },
  { path: AuthPath.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
];
