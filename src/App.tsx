import { Nullable } from '@common/types';
import { AuthPath } from '@components/router/router-path';
import { Button } from '@components/ui/button';
import { Range } from '@components/ui/range';
import { Table } from '@components/ui/table';
import { Sort } from '@components/ui/table/head';
import { useGetDecksQuery } from '@services/decks/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [value, setValue] = useState([3, 97]);

  const { data: decks, isLoading } = useGetDecksQuery();

  console.log(decks);

  if (isLoading) return null;

  return (
    <>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Button component={Link} to={AuthPath.SIGN_UP} variant="link">
          registration
        </Button>
      </div>

      <div style={{ display: 'flex' }}>
        <span>{value[0]}</span>
        <Range value={value} onValueChange={setValue} />
        <span>{value[1]}</span>
      </div>

      <div
        style={{
          padding: '10px',
        }}
      >
        <Table.Root>
          <Table.Head
            sortBy={sort}
            columns={columns}
            onSort={(a) => {
              setSort(a);
            }}
          />

          <Table.Body>
            {decks.items.map((item: any) => (
              <Table.Row key={item.id}>
                <Table.Cell title={item.name} />
                <Table.Cell title={item.cardsCount} />
                <Table.Cell title={item.updated} />
                <Table.Cell title={item.author.name} />
                <Table.Cell title="icons" />
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  );
};
