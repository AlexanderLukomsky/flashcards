import { SignInForm } from '@components/auth/forms/sign-in';

import { useSignInMutation } from 'services/auth';
import style from '../style.module.scss';

export const SignInPage = () => {
  const [signIn] = useSignInMutation();

  return (
    <div className={style.root}>
      <SignInForm onSubmit={signIn} />
    </div>
  );
};
