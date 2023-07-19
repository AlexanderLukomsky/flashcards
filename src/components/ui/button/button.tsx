import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import clsx from 'clsx';
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
      className={clsx(styles.general, styles[variant], className, {
        [styles.fullWidth]: fullWidth,
      })}
      {...restProps}
    >
      {IconStart && IconStart}
      {children}
      {IconEnd && IconStart}
    </Component>
  );
};
