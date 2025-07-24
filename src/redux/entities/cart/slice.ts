import { createSlice } from '@reduxjs/toolkit';
import type { CartItem } from '../../../types/cart-item.ts';

type CartState = {
  [key: string]: number;
};

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  selectors: {
    selectCartItems: (state: CartState) =>
      Object.keys(state).reduce((acc, id) => {
        acc.push({ id, amount: state[id] });

        return acc;
      }, [] as CartItem[]),
    selectAmountById: (state: CartState, id: string) => state[id] ?? 0,
  },
  reducers: {
    addToCart: (state: CartState, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state: CartState, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItems, selectAmountById } = cartSlice.selectors;
