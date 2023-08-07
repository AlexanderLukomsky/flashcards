import { AvatarDefaultIcon } from '@assets/icons';
import clsx from 'clsx';
import { ComponentPropsWithRef } from 'react';
import style from './style.module.scss';

export type DefaultAvatarProps = {
  containerProps?: ComponentPropsWithRef<'div'>;
  svgProps?: ComponentPropsWithRef<'svg'>;
};

export const DefaultAvatar = ({ containerProps, svgProps }: DefaultAvatarProps) => {
  const { className, ...restContainerProps } = { ...containerProps };

  return (
    <div className={clsx(style.container, className)} {...restContainerProps}>
      <AvatarDefaultIcon {...svgProps} />
    </div>
  );
};
