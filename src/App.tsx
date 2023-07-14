import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledTextfield } from './components/ui/controlled';
import { LoginForm, loginSchema } from './common/helpers';
import { Button } from './components/ui/button';
import { ControlledCheckbox } from './components/ui/controlled/controlled-checkbox';

export const App = () => {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      login: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = () => {};

  return (
    <div style={{ padding: '10px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <ControlledTextfield name="email" control={control} />
          <div>{errors?.email?.message}</div>
        </div>

        <div>
          <ControlledTextfield name="login" control={control} />
          <div>{errors?.login?.message}</div>
        </div>

        <div>
          <ControlledTextfield name="password" control={control} />
          <div>{errors?.password?.message}</div>
        </div>

        <div>
          <ControlledCheckbox name="rememberMe" control={control} />
          <div>{errors?.rememberMe?.message}</div>
        </div>

        <Button type="submit">submit</Button>
      </form>
    </div>
  );
};
