import clsx from 'clsx';
import { ChevronUpIcon } from '@assets/icons';
import { Typography } from '@components/ui/typography';
import { ComponentProps } from 'react';
import style from './style.module.scss';

export type HeadCellProps = {
  direction?: 'asc' | 'desc';
  showSort?: boolean;
  title?: string;
} & ComponentProps<'th'>;

export const HeadCell = ({
  children,
  showSort,
  direction,
  title,
  className,
  ...props
}: HeadCellProps) => (
  <th className={clsx(style.th, className)} {...props}>
    {title && (
      <Typography className={style.typography} variant="subtitle2" component="span">
        {title}

        {showSort && (
          <ChevronUpIcon className={clsx(style.icon, { [style.icon_down]: direction === 'asc' })} />
        )}
      </Typography>
    )}

    {children}
  </th>
);
