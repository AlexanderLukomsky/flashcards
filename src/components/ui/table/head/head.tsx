import { ComponentProps, MouseEvent } from 'react';
import { Nullable } from '@common/types';
import clsx from 'clsx';
import style from './style.module.scss';
import { Row } from '../row';
import { HeadCell } from '../head-cell';

export type Column = {
  title: string;
  key: string;
  isSortable?: boolean;
};

export type Sort = Nullable<{
  key: string;
  direction: 'asc' | 'desc';
}>;

export type HeadProps = {
  columns: Column[];
  sortBy: Sort;
  onSort: (sort: Sort) => void;
} & ComponentProps<'thead'>;

enum DataAttributes {
  Sortable = 'data-sortable',
  Key = 'data-key',
}

export const Head = ({ columns, sortBy, onSort, className, ...props }: HeadProps) => {
  const handleSort = (event: MouseEvent<HTMLTableRowElement>) => {
    const { target } = event;

    if (!(target instanceof Element)) return;

    const th = target.closest('th');
    const isSortable = th?.getAttribute('data-sortable');

    if (!isSortable) return;

    const key = th?.getAttribute('data-key');

    if (!key) throw new Error('data-key not found!');

    if (sortBy?.key !== key) {
      onSort({ key, direction: 'asc' });
      return;
    }

    if (sortBy?.direction === 'asc') {
      onSort({ key, direction: 'desc' });
      return;
    }

    onSort(null);
  };

  return (
    <thead className={clsx(style.thead, className)} {...props}>
      <Row onClick={handleSort}>
        {columns.map((column) => {
          const showSort = column.isSortable && !!sortBy && sortBy.key === column.key;

          return (
            <HeadCell
              title={column.title}
              showSort={showSort}
              key={column.key}
              direction={sortBy?.direction}
              {...{
                [DataAttributes.Key]: column.key,
                [DataAttributes.Sortable]: column.isSortable,
              }}
              className={style.th}
            />
          );
        })}
      </Row>
    </thead>
  );
};
