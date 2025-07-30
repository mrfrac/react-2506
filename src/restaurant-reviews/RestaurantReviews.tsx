import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store.ts';
import { selectRestaurantById } from '../redux/entities/restaurants/slice.ts';
import { Reviews } from '../components/reviews/Reviews.tsx';
import { useUser } from '../components/user-context/use-user.ts';
import { ReviewForm } from '../components/review-form/ReviewForm.tsx';

export const RestaurantReviews = () => {
  const { restaurantId } = useParams();
  const { user } = useUser();

  if (!restaurantId) {
    return null;
  }

  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div className="reviews">
      <Reviews reviewsIds={restaurant.reviews} />
      {user && <ReviewForm />}
    </div>
  );
};
