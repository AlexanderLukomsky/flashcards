import { Nullable } from '@common/types';
import { Table } from '@components/table/table';
import { TableBody } from '@components/table/table-body';
import { Sort, TableHeader } from '@components/table/table-header';

import { Header } from '@components/ui/header';

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

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
];

export const App = () => {
  const [sort, setSort] = useState<Nullable<Sort>>(null);

  return (
    <>
      <Header />
      <div
        style={{
          padding: '10px',
        }}
      >
        <Table>
          <TableHeader
            sortBy={sort}
            columns={columns}
            onSort={(a) => {
              setSort(a);
            }}
          />
          <TableBody data={data} />
        </Table>
      </div>
    </>
  );
};
