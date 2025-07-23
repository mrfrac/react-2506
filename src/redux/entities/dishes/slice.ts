import type { NormalizedDish } from '../../../types/normalized-dish.ts';
import { normalizedDishes } from '../../../constants/normalized-mock.ts';
import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from '@reduxjs/toolkit';

const initialState: EntityState<NormalizedDish, string> = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce(
    (acc, dish) => {
      acc[dish.id] = dish;

      return acc;
    },
    {} as Record<string, NormalizedDish>
  ),
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishById: (state: EntityState<NormalizedDish, string>, id: string) =>
      state.entities[id],
  },
  reducers: {},
});

export const { selectDishById } = dishesSlice.selectors;

createEntityAdapter();
