import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { SignInFormData, signInSchema } from '@common/helpers';
import { Card } from '@components/ui/card';
import { Typography } from '@components/ui/typography';
import { ControlledTextfield } from '@components/ui/controlled';
import { ControlledCheckbox } from '@components/ui/controlled/controlled-checkbox';
import { Button } from '@components/ui/button';
import { AuthPath } from '@components/router/router-path';
import style from './style.module.scss';
import rootStyle from '../../style.module.scss';

export type SignInFormProps = {
  onSubmit: (data: SignInFormData) => void;
};

export const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormData>({
    defaultValues: { email: '', password: '', rememberMe: false },
    resolver: zodResolver(signInSchema),
  });

  const isEmailError = !!errors.email?.message;
  const isPasswordError = !!errors.password?.message;

  const emailErrorMessage = errors.email?.message || '';
  const passwordErrorMessage = errors.password?.message || '';

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <Card className={rootStyle.card}>
      <Typography variant="large" className={rootStyle.title}>
        Sign In
      </Typography>

      <form onSubmit={handleFormSubmit} className={rootStyle.form}>
        <ControlledTextfield
          label="Email"
          control={control}
          name="email"
          isError={isEmailError}
          errorMessage={emailErrorMessage}
        />

        <ControlledTextfield
          label="Password"
          control={control}
          name="password"
          type="password"
          isError={isPasswordError}
          errorMessage={passwordErrorMessage}
        />

        <ControlledCheckbox
          control={control}
          name="rememberMe"
          label="Remember me"
          containerClassName={style.checkbox}
        />

        <Typography
          variant="body2"
          component={Link}
          to={AuthPath.FORGOT_PASSWORD}
          className={style.forgot_password}
        >
          Forgot Password?
        </Typography>

        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </form>

      <Typography variant="body2" className={rootStyle.prompt}>
        Don&apos;t have an account?
      </Typography>

      <Button component={Link} to={AuthPath.SIGN_UP} variant="link" className={rootStyle.link}>
        Sign Up
      </Button>
    </Card>
  );
};
