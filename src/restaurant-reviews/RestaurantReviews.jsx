import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../redux/entities/restaurants/slice.js';
import { Reviews } from '../components/reviews/Reviews.jsx';
import { useUser } from '../components/user-context/use-user.js';
import { ReviewForm } from '../components/review-form/ReviewForm.jsx';

export const RestaurantReviews = () => {
  const { restaurantId } = useParams();
  const { user } = useUser();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div className="reviews">
      <Reviews reviewsIds={restaurant.reviews} />
      {user && <ReviewForm />}
    </div>
  );
};
