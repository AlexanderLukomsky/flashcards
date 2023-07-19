import { TableDataCell } from '@components/table/td';
import style from './style.module.scss';

export type TableBodyProps = {
  data: any[];
};

export const TableBody = ({ data }: TableBodyProps) => (
  <tbody className={style.tbody}>
    {data.map((item, index) => (
      <tr key={index}>
        <TableDataCell title={item.title} />
        <TableDataCell title={item.cardsCount} />
        <TableDataCell title={item.updated} />
        <TableDataCell title={item.createdBy} />
        <TableDataCell title="icons" />
      </tr>
    ))}
  </tbody>
);
