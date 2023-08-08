import { LogoIcon } from '@assets/icons';
import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { AuthPath } from '@components/router/router-path';
import style from './style.module.scss';
import { Button } from '../button';
import { HeaderDropdown } from './header-dropdown';

export type BaseProps = {
  data?: {
    avatar: string;
    email: string;
  } | null;
  className?: string;
  onSignOut: () => void;
};

export type HeaderProps = BaseProps & Omit<ComponentPropsWithoutRef<'header'>, keyof BaseProps>;

export const Header = ({ data, className, onSignOut, ...restProps }: HeaderProps) => (
  <header className={clsx(style.header, className)} {...restProps}>
    <div className={style.container}>
      <Link to="/" className={style.logo_link}>
        <LogoIcon />
      </Link>

      {data ? (
        <HeaderDropdown
          src={data.avatar}
          userName="Hanna"
          email={data.email}
          onSignOut={onSignOut}
        />
      ) : (
        <Button component={Link} to={AuthPath.SIGN_IN}>
          Sign In
        </Button>
      )}
    </div>
  </header>
);
