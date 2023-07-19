import { MouseEvent } from 'react';
import { Nullable } from '@common/types';
import { TableHeaderCell } from '@components/ui/table-el/th';
import style from './style.module.scss';

export type Column = {
  title: string;
  key: string;
  isSortable?: boolean;
};

export type Sort = Nullable<{
  key: string;
  direction: 'asc' | 'desc';
}>;

export type TableHeaderProps = { columns: Column[]; sortBy: Sort; onSort: (sort: Sort) => void };

enum DataAttributes {
  Sortable = 'data-sortable',
  Key = 'data-key',
}

export const TableHeader = ({ columns, sortBy, onSort }: TableHeaderProps) => {
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
    <thead>
      <tr onClick={handleSort}>
        {columns.map((column) => {
          const showSort = column.isSortable && !!sortBy && sortBy.key === column.key;

          return (
            <TableHeaderCell
              showSort={showSort}
              key={column.key}
              direction={sortBy?.direction}
              {...{
                [DataAttributes.Key]: column.key,
                [DataAttributes.Sortable]: column.isSortable,
              }}
              className={style.th}
            >
              {column.title}
            </TableHeaderCell>
          );
        })}
      </tr>
    </thead>
  );
};
