import { configureStore } from '@reduxjs/toolkit';
import { dishesSlice } from './entities/dishes/slice.ts';
import { reviewsSlice } from './entities/reviews/slice.ts';
import { usersSlice } from './entities/users/slice.ts';
import { restaurantsSlice } from './entities/restaurants/slice.ts';
import { cartSlice } from './entities/cart/slice.ts';

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
