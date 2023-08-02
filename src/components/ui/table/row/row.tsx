import { ComponentProps } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';

export type RowProps = ComponentProps<'tr'>;

export const Row = ({ children, className, ...props }: RowProps) => (
  <tr className={clsx(style.tr, className)} {...props}>
    {children}
  </tr>
);
