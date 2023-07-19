import { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';

export type TableProps = ComponentPropsWithRef<'table'>;

export const Table = ({ children, ...props }: TableProps) => {
  const { className, ...restProps } = props;

  return (
    <table className={clsx(style.table, className)} {...restProps}>
      {children}
    </table>
  );
};
