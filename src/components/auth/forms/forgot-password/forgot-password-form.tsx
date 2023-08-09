import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Card } from '@components/ui/card';
import { Button } from '@components/ui/button';
import { ControlledTextfield } from '@components/ui/controlled';
import { Typography } from '@components/ui/typography';
import { ForgotPasswordFormData, forgotPasswordSchema } from '@common/helpers';
import { AuthPath } from '@components/router/router-path';
import rootStyle from '../../style.module.scss';
import style from './style.module.scss';

export const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    defaultValues: { email: '' },
    resolver: zodResolver(forgotPasswordSchema),
  });

  const isEmailError = !!errors.email?.message;

  const emailErrorMessage = errors.email?.message || '';

  const onSubmit = handleSubmit(() => {});

  return (
    <Card className={rootStyle.card}>
      <Typography variant="large" className={style.title}>
        Forgot your password?
      </Typography>

      <form onSubmit={onSubmit} className={rootStyle.form}>
        <ControlledTextfield
          label="Email"
          control={control}
          name="email"
          isError={isEmailError}
          errorMessage={emailErrorMessage}
        />

        <Typography variant="body2" className={style.description}>
          Enter your email address and we will send you further instructions
        </Typography>

        <Button type="submit" fullWidth>
          Send Instructions
        </Button>
      </form>
      <Typography variant="body2" className={rootStyle.prompt}>
        Did you remember your password?
      </Typography>
      <Button component={Link} to={AuthPath.SIGN_IN} variant="link" className={rootStyle.link}>
        Try logging in
      </Button>
    </Card>
  );
};
