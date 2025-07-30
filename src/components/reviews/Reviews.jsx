import { ReviewItem } from './ReviewItem.jsx';

export const Reviews = ({ reviewsIds }) => {
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
