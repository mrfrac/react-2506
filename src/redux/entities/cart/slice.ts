import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store.ts';

type CartState = {
  [key: string]: number;
};

const initialState: CartState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  selectors: {
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

export const selectCartSlice = (state: RootState): CartState =>
  state[cartSlice.name];

export const selectCartItemsIds = createSelector(
  [selectCartSlice],
  (cartSlice) => Object.keys(cartSlice)
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectAmountById } = cartSlice.selectors;
