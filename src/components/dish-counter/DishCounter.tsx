import { Counter } from '../counter/Counter.tsx';
import { useCounter } from '../counter/use-counter.ts';

export const DishCounter = () => {
  const { value, decrement, increment } = useCounter(0, 10);

  return (
    <Counter
      onIncrementClicked={increment}
      onDecrementClicked={decrement}
      value={value}
    />
  );
};
