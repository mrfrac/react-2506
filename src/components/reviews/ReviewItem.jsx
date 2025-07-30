import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/slice.js';
import { selectUserById } from '../../redux/entities/users/slice.js';
import { Rating } from './Rating.jsx';

export const ReviewItem = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review.userId));

  return (
    <span>
      <strong>{user.name}</strong>: {review.text} (
      <Rating rating={review.rating} />)
    </span>
  );
};
