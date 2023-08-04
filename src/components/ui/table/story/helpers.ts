import { Sort } from '../head';
import { DataType, KeysType } from './data';

const localSort = (
  data: DataType,
  key: KeysType,
  sort: { key: string; direction: 'asc' | 'desc' },
) => {
  if (key === 'cardsCount') {
    return sort.direction === 'asc'
      ? [...data].sort((a, b) => a.cardsCount - b.cardsCount)
      : [...data].sort((a, b) => b.cardsCount - a.cardsCount);
  }

  return sort.direction === 'asc'
    ? [...data].sort((a, b) => a[key].localeCompare(b[key]))
    : [...data].sort((a, b) => b[key].localeCompare(a[key]));
};

export const sortedData = (data: DataType, sort: Sort<string>) => {
  if (!sort?.direction) return data;

  if (sort.key === 'name') {
    return localSort(data, 'title', sort);
  }

  if (sort.key === 'createdBy') {
    return localSort(data, 'createdBy', sort);
  }

  if (sort.key === 'updated') {
    return localSort(data, 'updated', sort);
  }

  if (sort.key === 'cardsCount') {
    return localSort(data, 'cardsCount', sort);
  }

  return data;
};
