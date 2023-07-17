import { ElementType } from 'react';
import { TypographyProps } from '.';
import styles from './typography.module.scss';

const variantsComponentsMap: Record<string, ElementType> = {
  large: 'h5',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'h6',
  subtitle2: 'h6',
  caption: 'span',
  overline: 'span',
  link1: 'span',
  link2: 'span',
  body2: 'p',
  body1: 'p',
};

export const Typography = <T extends ElementType = 'p'>({
  variant = 'body1',
  component,
  fullWidth,
  className,
  children,
  ...restProps
}: TypographyProps<T>) => {
  const Component = component || variantsComponentsMap[variant];

  return (
    <Component className={`${styles[variant]}${className ? ` ${className}` : ''}`} {...restProps}>
      {children}
    </Component>
  );
};
