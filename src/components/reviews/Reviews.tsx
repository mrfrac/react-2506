import type { FunctionComponent } from 'react';
import { ReviewItem } from './ReviewItem.tsx';

type ReviewsProps = {
  reviewsIds: string[];
};

export const Reviews: FunctionComponent<ReviewsProps> = ({ reviewsIds }) => {
  return (
    <ul>
      {reviewsIds.map((reviewId) => (
        <li key={reviewId}>
          <ReviewItem reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};
