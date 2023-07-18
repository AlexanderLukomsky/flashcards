import { ChevronUpIcon } from '@assets/icons';
import { Typography } from '@components/ui/typography';
import { ComponentPropsWithoutRef } from 'react';
import style from './style.module.scss';

export type TableHeaderCellProps = {
  children: string;
  dataKey: string;
  direction?: 'asc' | 'desc';
  isSortable?: boolean;
  showSort?: boolean;
} & ComponentPropsWithoutRef<'th'>;

enum DataAttributes {
  Sortable = 'data-sortable',
  Key = 'data-key',
}

export const TableHeaderCell = ({
  children,
  dataKey,
  isSortable,
  showSort,
  direction,
  ...props
}: TableHeaderCellProps) => {
  const { className, ...restProps } = props;

  const sortableClassName = isSortable ? ` ${style.sortable}` : '';

  return (
    <th
      className={`${style.th}${className ? ` ${className}` : ''}`}
      {...{ [DataAttributes.Sortable]: isSortable, [DataAttributes.Key]: dataKey }}
      {...restProps}
    >
      <Typography
        className={`${style.typography}${sortableClassName}`}
        variant="subtitle2"
        component="span"
      >
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
