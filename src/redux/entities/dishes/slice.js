import { normalizedDishes } from '../../../constants/normalized-mock.js';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
  reducers: {},
});

export const { selectDishById } = dishesSlice.selectors;

createEntityAdapter();
