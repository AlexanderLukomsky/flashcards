import clsx from 'clsx';
import { ChevronUpIcon } from '@assets/icons';
import { Typography } from '@components/ui/typography';
import { ComponentPropsWithoutRef } from 'react';
import style from './style.module.scss';

export type TableHeaderCellProps = {
  children: string;
  direction?: 'asc' | 'desc';
  showSort?: boolean;
} & ComponentPropsWithoutRef<'th'>;

export const TableHeaderCell = ({
  children,
  showSort,
  direction,
  ...props
}: TableHeaderCellProps) => {
  const { className, ...restProps } = props;

  return (
    <th className={clsx(style.th, className)} {...restProps}>
      <Typography className={style.typography} variant="subtitle2" component="span">
        {children}

        {showSort && (
          <ChevronUpIcon className={clsx(style.icon, { [style.icon_down]: direction === 'asc' })} />
        )}
      </Typography>
    </th>
  );
};
