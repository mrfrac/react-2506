import { Counter } from '../counter/Counter.tsx';
import type { FC } from 'react';
import { useDishCounter } from './use-dish-counter.ts';

type DishCounterProps = {
  dishId: string;
};

export const DishCounter: FC<DishCounterProps> = ({ dishId }) => {
  const { value, decrement, increment } = useDishCounter({
    min: 0,
    max: 10,
    dishId,
  });

  return (
    <Counter
      onIncrementClicked={increment}
      onDecrementClicked={decrement}
      value={value}
    />
  );
};
