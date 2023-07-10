import { ElementType } from 'react';
import { getElementType } from './helpers';
import { TypographyProps } from '.';
import styles from './typography.module.scss';

export const Typography = <T extends ElementType = 'p'>({
  variant = 'body1',
  component,
  fullWidth,
  className,
  children,
  ...restProps
}: TypographyProps<T>) => {
  const Component = component || getElementType(variant);

  return (
    <Component className={`${styles[variant]}${className ? ` ${className}` : ''}`} {...restProps}>
      {children}
    </Component>
  );
};
