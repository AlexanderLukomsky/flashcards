import { Range } from '@components/ui/range';
import { Table } from '@components/ui/table';
import { Sort } from '@components/ui/table/head';
import {
  DecksSortKey,
  changeRangeValues,
  selectDecksState,
  setCardsCount,
  setSort,
} from '@redux/slices/decks-slice';
import { useAppDispatch } from '@redux/store/hooks';
import { useGetDecksQuery } from '@services/decks/api';
import { useSelector } from 'react-redux';

const columns = [
  {
    key: 'name',
    title: 'Name',
    isSortable: true,
  } as const,
  {
    key: 'cardsCount',
    title: 'Cards',
    isSortable: true,
  } as const,
  {
    key: 'updated',
    title: 'Last Updated',
    isSortable: true,
  } as const,
  {
    key: 'userId',
    title: 'Created by',
    isSortable: true,
  } as const,
  {
    key: 'options',
    title: '',
  } as const,
];

export const App = () => {
  const dispatch = useAppDispatch();

  const { params: decksRequestParams, rangeValues, sort } = useSelector(selectDecksState);

  const { data: decks, isLoading } = useGetDecksQuery(decksRequestParams);

  const handleChangeRange = (value: number[]) => {
    dispatch(changeRangeValues(value));
  };

  const handleCommitRange = () => {
    dispatch(setCardsCount());
  };

  const handleSort = (sort: Sort<DecksSortKey | 'options'>) => {
    if (!sort) {
      dispatch(setSort(null));

      return;
    }

    if (sort.key !== 'options') {
      const { key, direction } = sort;

      dispatch(setSort({ key, direction }));
    }
  };

  if (isLoading) return null;

  return (
    <>
      <div style={{ display: 'flex' }}>
        <span>{rangeValues[0]}</span>
        <Range
          value={rangeValues}
          onValueChange={handleChangeRange}
          onValueCommit={handleCommitRange}
        />
        <span>{rangeValues[1]}</span>
      </div>

      <div
        style={{
          padding: '10px',
        }}
      >
        <Table.Root>
          <Table.Head sortBy={sort} columns={columns} onSort={handleSort} />

          <Table.Body>
            {decks?.items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell title={item.name} />
                <Table.Cell title={item.cardsCount.toString()} />
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
