import { ComponentProps } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';

export type RootProps = ComponentProps<'table'>;

export const Root = ({ children, className, ...props }: RootProps) => (
  <table className={clsx(style.table, className)} {...props}>
    {children}
  </table>
);
