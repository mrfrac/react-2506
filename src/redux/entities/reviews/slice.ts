import type { NormalizedReview } from '../../../types/normalized-review.ts';
import { normalizedReviews } from '../../../constants/normalized-mock.ts';
import { createSlice, type EntityState } from '@reduxjs/toolkit';

const initialState: EntityState<NormalizedReview, string> = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce(
    (acc, review) => {
      acc[review.id] = review;

      return acc;
    },
    {} as Record<string, NormalizedReview>
  ),
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewById: (
      state: EntityState<NormalizedReview, string>,
      id: string
    ) => state.entities[id],
  },
  reducers: {},
});

export const { selectReviewById } = reviewsSlice.selectors;
