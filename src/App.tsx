import { Nullable } from '@common/types';
import { Sort, TableHeader } from '@components/ui/table/table-header';
import { useState } from 'react';

const columns = [
  {
    key: 'name',
    title: 'Name',
    isSortable: true,
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    isSortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    isSortable: true,
  },
  {
    key: 'createdBy',
    title: 'Created by',
    isSortable: true,
  },
  {
    key: 'options',
    title: '',
  },
];

export const App = () => {
  const [sort, setSort] = useState<Nullable<Sort>>(null);

  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        gap: '15px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <table>
        <TableHeader
          sortBy={sort}
          columns={columns}
          onSort={(a) => {
            setSort(a);
          }}
        />
      </table>
    </div>
  );
};
