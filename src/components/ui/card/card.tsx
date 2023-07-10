import { ReactNode, ComponentPropsWithoutRef } from 'react';

import styles from './card.module.scss';

export type CardProps = {
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

export const Card = ({ children, className, ...restProps }: CardProps) => (
  <div className={`${styles.card}${className ? ` ${className}` : ''}`} {...restProps}>
    {children}
  </div>
);
