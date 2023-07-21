import { LogoIcon } from '@assets/icons';
import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { Button } from '../button';
import { HeaderDropdown } from './header-dropdown';

export type BaseProps = { isLoggedIn?: boolean; className?: string };

export type HeaderProps = BaseProps & Omit<ComponentPropsWithoutRef<'header'>, keyof BaseProps>;

export const Header = ({ isLoggedIn, className, ...restProps }: HeaderProps) => (
  <header className={clsx(style.header, className)} {...restProps}>
    <div className={style.container}>
      <Link to="/" className={style.logo_link}>
        <LogoIcon />
      </Link>

      {true ? (
        <HeaderDropdown
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          userName="Hanna"
          email=" j&johnson@gmail.com"
        />
      ) : (
        <Button>Sign In</Button>
      )}
    </div>
  </header>
);
