import { ComponentProps } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';

export type BodyProps = ComponentProps<'tbody'>;

export const Body = ({ children, className, ...props }: BodyProps) => (
  <tbody className={clsx(style.tbody, className)} {...props}>
    {children}
  </tbody>
);
