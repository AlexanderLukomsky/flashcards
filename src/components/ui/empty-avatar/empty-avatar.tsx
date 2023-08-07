import { EmptyAvatarIcon } from '@assets/icons';
import clsx from 'clsx';
import { ComponentPropsWithRef } from 'react';
import style from './style.module.scss';

export type EmptyAvatarProps = {
  containerProps?: ComponentPropsWithRef<'div'>;
  svgProps?: ComponentPropsWithRef<'svg'>;
};

export const EmptyAvatar = ({ containerProps, svgProps }: EmptyAvatarProps) => {
  const { className, ...restContainerProps } = { ...containerProps };

  return (
    <div className={clsx(style.container, className)} {...restContainerProps}>
      <EmptyAvatarIcon {...svgProps} />
    </div>
  );
};
