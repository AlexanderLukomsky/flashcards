import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewPasswordFormData, newPasswordSchema } from '@common/helpers';
import { Typography } from '@components/ui/typography';
import { ControlledTextfield } from '@components/ui/controlled';
import { Button } from '@components/ui/button';
import { Card } from '@components/ui/card';
import style from './style.module.scss';
import rootStyle from '../../style.module.scss';

export const NewPasswordForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewPasswordFormData>({
    defaultValues: { password: '' },
    resolver: zodResolver(newPasswordSchema),
  });

  const isPasswordError = !!errors.password?.message;

  const passwordErrorMessage = errors.password?.message || '';

  const onSubmit = handleSubmit(() => {});

  return (
    <Card className={style.card}>
      <Typography variant="large" className={style.title}>
        Create new password
      </Typography>

      <form onSubmit={onSubmit} className={rootStyle.form}>
        <ControlledTextfield
          label="Password"
          control={control}
          name="password"
          isError={isPasswordError}
          errorMessage={passwordErrorMessage}
        />

        <Typography variant="body2" className={style.description}>
          Create new password and we will send you further instructions to email
        </Typography>

        <Button type="submit" fullWidth>
          Create New Password
        </Button>
      </form>
    </Card>
  );
};
