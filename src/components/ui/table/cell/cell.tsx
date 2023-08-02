import clsx from 'clsx';
import { Typography } from '@components/ui/typography';
import { ComponentProps } from 'react';
import style from './style.module.scss';

export type CellProps = { title?: string } & ComponentProps<'td'>;

export const Cell = ({ title, children, className, ...props }: CellProps) => (
  <td className={clsx(style.td, className)} {...props}>
    {title && (
      <Typography className={style.typography} variant="body2" component="span">
        {title}
      </Typography>
    )}

    {children}
  </td>
);
