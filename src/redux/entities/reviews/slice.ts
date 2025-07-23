import type { NormalizedReview } from '../../../types/normalized-review.ts';
import { normalizedReviews } from '../../../constants/normalized-mock.ts';
import { createSlice } from '@reduxjs/toolkit';
import type { Entity } from '../../types/entity.ts';

type ReviewsState = {
  ids: string[];
  entities: Entity<NormalizedReview>;
};

const initialState: ReviewsState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {} as Entity<NormalizedReview>),
};

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewById: (state: ReviewsState, id: string) => state.entities[id],
  },
  reducers: {},
});

export const { selectReviewById } = reviewSlice.selectors;
