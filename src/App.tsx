import { EmailNotification } from './components/auth/email-notification';
import { ForgotPasswordForm } from './components/auth/forms/forgot-password';
import { NewPasswordForm } from './components/auth/forms/new-password/new-password-form';
import { RegistrationForm } from './components/auth/forms/registration';
import { SignInForm } from './components/auth/forms/sign-in';

export const App = () => (
  <div
    style={{
      padding: '10px',
      display: 'flex',
      gap: '15px',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <SignInForm />
    <RegistrationForm />
    <ForgotPasswordForm />
    <NewPasswordForm />
    <EmailNotification />
  </div>
);
