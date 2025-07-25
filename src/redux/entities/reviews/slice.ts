import type { Review } from '../../../types/review.ts';
import { normalizedReviews } from '../../../constants/normalized-mock.ts';
import { createSlice, type EntityState } from '@reduxjs/toolkit';

const initialState: EntityState<Review, string> = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce(
    (acc, review) => {
      acc[review.id] = review;

      return acc;
    },
    {} as Record<string, Review>
  ),
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewById: (state: EntityState<Review, string>, id: string) =>
      state.entities[id],
  },
  reducers: {},
});

export const { selectReviewById } = reviewsSlice.selectors;
