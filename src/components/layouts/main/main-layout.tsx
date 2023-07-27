import { Header } from '@components/ui/header';
import { Outlet } from 'react-router-dom';
import style from './style.module.scss';

export const MainLayout = () => (
  <>
    <Header />

    <div className={style.container}>
      <Outlet />
    </div>
  </>
);
