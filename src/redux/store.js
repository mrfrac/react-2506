import { configureStore } from '@reduxjs/toolkit';
import { dishesSlice } from './entities/dishes/slice.js';
import { reviewsSlice } from './entities/reviews/slice.js';
import { usersSlice } from './entities/users/slice.js';
import { restaurantsSlice } from './entities/restaurants/slice.js';
import { cartSlice } from './entities/cart/slice.js';

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
