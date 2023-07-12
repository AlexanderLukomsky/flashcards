import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import styles from './button.module.scss';

type BaseButtonProps<T> = {
  component?: T;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'icon';
  fullWidth?: boolean;
  children?: ReactNode;
  className?: string;
  IconStart?: ReactNode;
  IconEnd?: ReactNode;
};

export type ButtonProps<T extends ElementType> = BaseButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseButtonProps<T>>;

export const Button = <T extends ElementType = 'button'>({
  variant = 'primary',
  component,
  fullWidth,
  className,
  children,
  IconStart,
  IconEnd,
  ...restProps
}: ButtonProps<T>) => {
  const Component = component || 'button';

  return (
    <Component
      className={`${styles.general} ${styles[variant]}${fullWidth ? ` ${styles.fullWidth}` : ''}${
        className ? ` ${className}` : ''
      }`}
      {...restProps}
    >
      {IconStart && IconStart}
      {children}
      {IconEnd && IconStart}
    </Component>
  );
};
