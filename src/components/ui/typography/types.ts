import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type TypographyVariant =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline'
  | 'link1'
  | 'link2';

export type BaseTypographyProps<T> = {
  component?: T;
  variant?: TypographyVariant;
  children?: ReactNode;
  className?: string;
};

export type TypographyProps<T extends ElementType> = BaseTypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseTypographyProps<T>>;
