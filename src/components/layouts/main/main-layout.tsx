import { Header } from '@components/ui/header';
import { Outlet } from 'react-router-dom';
import { useLogoutMutation, useMeQuery } from '@services/auth';
import style from './style.module.scss';

export const MainLayout = () => {
  const { data } = useMeQuery();

  const [logout] = useLogoutMutation();

  const handleSignOut = () => {
    logout();
  };

  return (
    <>
      <Header data={data} onSignOut={handleSignOut} />

      <div className={style.container}>
        <Outlet />
      </div>
    </>
  );
};
