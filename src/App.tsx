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
  </div>
);
