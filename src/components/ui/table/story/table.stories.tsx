import { useState } from 'react';
import { Nullable } from '@common/types';
import type { StoryObj } from '@storybook/react';
import { Table } from '..';
import { columns, data } from './data';
import { Sort } from '../head';
import { sortedData } from './helpers';

const meta = {
  title: 'Components/UI/Table',
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

const Template = () => {
  const [sort, setSort] = useState<Nullable<Sort<string>>>(null);

  return (
    <Table.Root>
      <Table.Head
        sortBy={sort}
        columns={columns}
        onSort={(a) => {
          setSort(a);
        }}
      />

      <Table.Body>
        {sortedData(data, sort).map((item) => (
          <Table.Row key={item.title}>
            <Table.Cell title={item.title} />
            <Table.Cell title={`${item.cardsCount}`} />
            <Table.Cell title={item.updated} />
            <Table.Cell title={item.createdBy} />
            <Table.Cell title="icons" />
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export const Primary: Story = { render: Template };

export default meta;
