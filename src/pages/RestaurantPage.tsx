import { useParams } from 'react-router';
import { RestaurantCard } from '../components/restaurant-card/RestaurantCard.tsx';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }

  return <RestaurantCard restaurantId={restaurantId} />;
};
