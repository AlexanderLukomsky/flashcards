import clsx from 'clsx';
import { Typography } from '@components/ui/typography';
import { ComponentPropsWithoutRef } from 'react';
import style from './style.module.scss';

export type TableDataCellProps = { title?: string } & ComponentPropsWithoutRef<'td'>;

export const TableDataCell = ({ title, children, ...props }: TableDataCellProps) => {
  const { className, ...restProps } = props;

  return (
    <td className={clsx(style.td, className)} {...restProps}>
      {title && (
        <Typography className={style.typography} variant="body2" component="span">
          {title}
        </Typography>
      )}

      {children}
    </td>
  );
};
