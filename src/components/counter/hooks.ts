import { useState } from 'react';

export const useCounter = (min: number, max: number) => {
  const [value, setValue] = useState(0);

  return {
    increment: () => {
      if (value >= max) return;

      setValue(value + 1);
    },
    decrement: () => {
      if (value === min) return;

      setValue(value - 1);
    },
    value,
  };
};
