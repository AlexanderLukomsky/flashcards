import { RegistrationForm } from '@components/auth/forms/registration';
import style from '../style.module.scss';

export const RegistrationPage = () => (
  <div className={style.root}>
    <RegistrationForm />
  </div>
);
