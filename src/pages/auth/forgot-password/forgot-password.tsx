import { ForgotPasswordForm } from '@components/auth/forms/forgot-password';
import style from '../style.module.scss';

export const ForgotPasswordPage = () => (
  <div className={style.root}>
    <ForgotPasswordForm />
  </div>
);
