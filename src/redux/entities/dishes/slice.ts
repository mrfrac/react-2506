import type { Dish } from '../../../types/dish.ts';
import { normalizedDishes } from '../../../constants/normalized-mock.ts';
import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from '@reduxjs/toolkit';

const initialState: EntityState<Dish, string> = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce<Record<string, Dish>>((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishById: (state: EntityState<Dish, string>, id: string) =>
      state.entities[id],
  },
  reducers: {},
});

export const { selectDishById } = dishesSlice.selectors;

createEntityAdapter();
