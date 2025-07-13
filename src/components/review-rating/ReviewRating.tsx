import { type FunctionComponent, useEffect } from 'react';
import { Counter } from '../counter/Counter.tsx';
import { useCounter } from '../counter/hooks.ts';

type ReviewRatingProps = {
  onRatingChange: (value: number) => void;
};

export const ReviewRating: FunctionComponent<ReviewRatingProps> = ({
  onRatingChange,
}) => {
  const { value, increment, decrement } = useCounter(0, 5);

  useEffect(() => {
    onRatingChange(value);
  }, [value]);

  return (
    <Counter
      onDecrementClicked={decrement}
      onIncrementClicked={increment}
      value={value}
    />
  );
};
