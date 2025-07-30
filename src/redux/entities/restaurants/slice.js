import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock.js';

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectDefaultRestaurantId: (state) => state.ids[0],
    selectRestaurantsIds: (state) => state.ids,
  },
  reducers: {},
});

export const {
  selectRestaurantById,
  selectDefaultRestaurantId,
  selectRestaurantsIds,
} = restaurantsSlice.selectors;
