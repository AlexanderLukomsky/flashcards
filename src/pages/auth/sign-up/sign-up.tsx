import { SignUpForm } from '@components/auth/forms/sign-up';
import { useSignUpMutation } from '@services/auth';
import { SignUpFormData } from '@common/helpers';
import { useNavigate } from 'react-router-dom';
import { AuthPath } from '@components/router/router-path';
import style from '../style.module.scss';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const [signUp] = useSignUpMutation();

  const onSubmit = async (data: Omit<SignUpFormData, 'confirmPassword'>) => {
    await signUp(data).unwrap();

    navigate(AuthPath.SIGN_IN);
  };

  return (
    <div className={style.root}>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};
