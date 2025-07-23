import { configureStore } from '@reduxjs/toolkit';
import { dishesSlice } from './entities/dishes/slice.ts';
import { reviewsSlice } from './entities/reviews/slice.ts';
import { usersSlice } from './entities/users/slice.ts';

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
