import { createSlice, type EntityState } from '@reduxjs/toolkit';
import type { Restaurant } from '../../../types';
import { normalizedRestaurants } from '../../../constants/normalized-mock.ts';

const initialState: EntityState<Restaurant, string> = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce(
    (acc, restaurant) => {
      acc[restaurant.id] = restaurant;

      return acc;
    },
    {} as Record<string, Restaurant>
  ),
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurantById: (
      state: EntityState<Restaurant, string>,
      id: string
    ) => state.entities[id],
    selectDefaultRestaurantId: (state: EntityState<Restaurant, string>) =>
      state.ids[0],
    selectRestaurantsIds: (state) => state.ids,
  },
  reducers: {},
});

export const {
  selectRestaurantById,
  selectDefaultRestaurantId,
  selectRestaurantsIds,
} = restaurantsSlice.selectors;
