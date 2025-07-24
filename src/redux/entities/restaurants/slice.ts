import { createSlice, type EntityState } from '@reduxjs/toolkit';
import type { NormalizedRestaurant } from '../../../types/normalized-restaurant.ts';
import { normalizedRestaurants } from '../../../constants/normalized-mock.ts';

const initialState: EntityState<NormalizedRestaurant, string> = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce(
    (acc, restaurant) => {
      acc[restaurant.id] = restaurant;

      return acc;
    },
    {} as Record<string, NormalizedRestaurant>
  ),
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurantById: (
      state: EntityState<NormalizedRestaurant, string>,
      id: string
    ) => state.entities[id],
  },
  reducers: {},
});

export const { selectRestaurantById } = restaurantsSlice.selectors;
