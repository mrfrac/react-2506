import { useState } from 'react';

export const useCounter = () => {
  const [value, setValue] = useState(0);

  return {
    increment: () => {
      if (value >= 5) return;

      setValue(value + 1);
    },
    decrement: () => {
      if (value === 0) return;

      setValue(value - 1);
    },
    value,
  };
};
