import { SignInForm } from '@components/auth/forms/sign-in';

import style from '../style.module.scss';

export const SignInPage = () => (
  <div className={style.root}>
    <SignInForm />
  </div>
);
