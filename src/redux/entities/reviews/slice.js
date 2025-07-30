import { normalizedReviews } from '../../../constants/normalized-mock.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
  reducers: {},
});

export const { selectReviewById } = reviewsSlice.selectors;
