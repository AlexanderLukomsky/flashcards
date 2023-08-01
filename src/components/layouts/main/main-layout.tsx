import { Header } from '@components/ui/header';
import { Outlet } from 'react-router-dom';
import { useMeQuery } from 'services/auth';
import style from './style.module.scss';

export const MainLayout = () => {
  const { data } = useMeQuery();

  return (
    <>
      <Header data={data} />

      <div className={style.container}>
        <Outlet />
      </div>
    </>
  );
};
