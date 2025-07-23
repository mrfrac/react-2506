import { configureStore } from '@reduxjs/toolkit';
import { dishSlice } from './entities/dishes/slice.ts';
import { reviewSlice } from './entities/reviews/slice.ts';

export const store = configureStore({
  reducer: {
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
  },
});
