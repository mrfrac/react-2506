import { Counter } from '../counter/Counter.tsx';
import type { FC } from 'react';
import { useDishCounter } from './use-dish-counter.ts';
import { selectCartItems } from '../../redux/entities/cart/slice.ts';
import { useSelector } from 'react-redux';

type DishCounterProps = {
  dishId: string;
};

export const DishCounter: FC<DishCounterProps> = ({ dishId }) => {
  const { value, decrement, increment } = useDishCounter({
    min: 0,
    max: 10,
    dishId,
  });

  console.log(useSelector(selectCartItems));

  return (
    <Counter
      onIncrementClicked={increment}
      onDecrementClicked={decrement}
      value={value}
    />
  );
};
