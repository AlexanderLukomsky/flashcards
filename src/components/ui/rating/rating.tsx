import { StarIcon } from '@assets/icons';
import { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { Button } from '../button';
import style from './style.module.scss';

export type RatingsProps = { value?: number; onChange?: (value: number) => void };

export const Rating = ({ onChange, value = 0 }: RatingsProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onChange?.(+event.currentTarget.value);
  };

  return (
    <div className={style.rating}>
      {Array.from({ length: 5 }, (_, index) => {
        const currentValue = index + 1;

        return (
          <Button
            className={clsx(style.button, {
              [style.selected]: currentValue <= value,
            })}
            key={currentValue}
            value={currentValue}
            variant="icon"
            IconStart={<StarIcon />}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};
