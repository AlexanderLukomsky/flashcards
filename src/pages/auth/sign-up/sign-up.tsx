import { SignUpForm } from '@components/auth/forms/sign-up';
import style from '../style.module.scss';

export const SignUpPage = () => (
  <div className={style.root}>
    <SignUpForm />
  </div>
);
