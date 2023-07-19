import { ReactNode, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import styles from './card.module.scss';

export type CardProps = {
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

export const Card = ({ children, className, ...restProps }: CardProps) => (
  <div className={clsx(styles.card, className)} {...restProps}>
    {children}
  </div>
);
