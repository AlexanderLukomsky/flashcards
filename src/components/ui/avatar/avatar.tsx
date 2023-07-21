import * as RadixAvatar from '@radix-ui/react-avatar';
import { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';

export type AvatarProps = { src: string } & ComponentPropsWithRef<'span'>;

export const Avatar = ({ src, ...props }: AvatarProps) => {
  const { className, ...restProps } = props;

  return (
    <RadixAvatar.Root className={clsx(style.root, className)} {...restProps}>
      <RadixAvatar.Image className={style.avatar} src={src} alt="avatar" />
    </RadixAvatar.Root>
  );
};
