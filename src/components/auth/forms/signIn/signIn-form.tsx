import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Card } from '../../../ui/card';
import { ControlledTextfield } from '../../../ui/controlled';
import { Typography } from '../../../ui/typography';
import { SignInFormData, signInSchema } from '../../../../common/helpers';
import { ControlledCheckbox } from '../../../ui/controlled/controlled-checkbox';
import { Button } from '../../../ui/button';
import rootStyle from '../style.module.scss';
import style from './style.module.scss';

export const SignInForm = () => {
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

  const onSubmit = handleSubmit((formData: SignInFormData) => {});

  return (
    <Card className={rootStyle.card}>
      <form onSubmit={onSubmit} className={rootStyle.form}>
        <Typography variant="large" className={rootStyle.title}>
          Sign In
        </Typography>
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

        <Typography variant="body2" component={Link} to="/" className={style.forgot_password}>
          Forgot Password?
        </Typography>

        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </form>

      <Typography variant="body2" className={rootStyle.prompt}>
        Don&apos;t have an account?
      </Typography>

      <Button component={Link} to="/" variant="link" className={rootStyle.link}>
        Sign Up
      </Button>
    </Card>
  );
};
