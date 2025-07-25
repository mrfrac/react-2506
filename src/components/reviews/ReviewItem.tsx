import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/slice.ts';
import { selectUserById } from '../../redux/entities/users/slice.ts';
import { Rating } from './Rating.tsx';
import type { RootState } from '../../redux/store.ts';

type ReviewItemProps = {
  reviewId: string;
};

export const ReviewItem: FC<ReviewItemProps> = ({ reviewId }) => {
  const review = useSelector((state: RootState) =>
    selectReviewById(state, reviewId)
  );
  const user = useSelector((state: RootState) =>
    selectUserById(state, review.userId)
  );

  return (
    <span>
      <strong>{user.name}</strong>: {review.text} (
      <Rating rating={review.rating} />)
    </span>
  );
};
