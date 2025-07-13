import { type FunctionComponent } from 'react';

type CounterProps = {
  onIncrementClicked: () => void;
  onDecrementClicked: () => void;
  value: number;
};

export const Counter: FunctionComponent<CounterProps> = ({
  onIncrementClicked,
  onDecrementClicked,
  value,
}) => {
  return (
    <>
      <button type="button" onClick={onDecrementClicked}>
        -
      </button>
      {value}
      <button type="button" onClick={onIncrementClicked}>
        +
      </button>
    </>
  );
};
