import type { NormalizedDish } from '../../../types/normalized-dish.ts';
import { normalizedDishes } from '../../../constants/normalized-mock.ts';
import { createSlice } from '@reduxjs/toolkit';

type DishEntity = {
  [key: string]: NormalizedDish;
};

type DishesState = {
  ids: string[];
  entities: DishEntity;
};

const initialState: DishesState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {} as DishEntity),
};

export const dishSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishById: (state: DishesState, id: string) => state.entities[id],
  },
  reducers: {},
});

export const { selectDishById } = dishSlice.selectors;
