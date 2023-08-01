import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { SignUpFormData, signUpSchema } from '@common/helpers';
import { Card } from '@components/ui/card';
import { Typography } from '@components/ui/typography';
import { ControlledTextfield } from '@components/ui/controlled';
import { Button } from '@components/ui/button';
import { AuthPath } from '@components/router/router-path';
import style from './style.module.scss';
import rootStyle from '../../style.module.scss';

export const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    resolver: zodResolver(signUpSchema),
  });

  const isEmailError = !!errors.email?.message;
  const isPasswordError = !!errors.password?.message;
  const isConfirmPasswordError = !!errors.confirmPassword?.message;

  const emailErrorMessage = errors.email?.message || '';
  const passwordErrorMessage = errors.password?.message || '';
  const confirmPasswordErrorMessage = errors.confirmPassword?.message || '';

  const onSubmit = handleSubmit(() => {});

  return (
    <Card className={rootStyle.card}>
      <Typography variant="large" className={rootStyle.title}>
        Sign Up
      </Typography>

      <form onSubmit={onSubmit} className={rootStyle.form}>
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

        <ControlledTextfield
          label="Confirm Password"
          control={control}
          name="confirmPassword"
          type="password"
          isError={isConfirmPasswordError}
          errorMessage={confirmPasswordErrorMessage}
          containerProps={{ className: style.confirm_password }}
        />

        <Button type="submit" fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" className={rootStyle.prompt}>
        Already have an account?
      </Typography>
      <Button component={Link} to={AuthPath.SIGN_IN} variant="link" className={rootStyle.link}>
        Sign In
      </Button>
    </Card>
  );
};
