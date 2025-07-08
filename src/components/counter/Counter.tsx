import { useCounter } from './hooks.ts';

export const Counter = () => {
  const { value, increment, decrement } = useCounter();

  return (
    <>
      <button type="button" onClick={() => decrement()}>
        -
      </button>
      {value}
      <button type="button" onClick={() => increment()}>
        +
      </button>
    </>
  );
};
