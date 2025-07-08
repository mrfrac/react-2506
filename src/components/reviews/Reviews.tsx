import type { FunctionComponent } from 'react';
import { Rating } from './Rating.tsx';

type ReviewsProps = {
  reviews: Review[];
};

export const Reviews: FunctionComponent<ReviewsProps> = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <strong>{review.user}</strong>: {review.text} (
          <Rating rating={review.rating} />)
        </li>
      ))}
    </ul>
  );
};
