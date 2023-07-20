import { LogoIcon } from '@assets/icons';
import style from './style.module.scss';

export const Header = () => (
  <header className={style.header}>
    <div className={style.container}>
      <LogoIcon />
    </div>
  </header>
);
