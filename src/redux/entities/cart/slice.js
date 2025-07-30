import { createSelector, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  selectors: {
    selectAmountById: (state, id) => state[id] ?? 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
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

export const selectCartSlice = (state) => state[cartSlice.name];

export const selectCartItemsIds = createSelector(
  [selectCartSlice],
  (cartSlice) => Object.keys(cartSlice)
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectAmountById } = cartSlice.selectors;
