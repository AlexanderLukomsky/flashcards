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
    <th className={`${style.th}${className ? ` ${className}` : ''}`} {...restProps}>
      <Typography className={`${style.typography}`} variant="subtitle2" component="span">
        {children}

        {showSort && (
          <ChevronUpIcon
            className={`${style.icon} ${direction === 'asc' ? ` ${style.icon_down}` : ''}`}
          />
        )}
      </Typography>
    </th>
  );
};
