import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.js';

export const RestaurantButton = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Link to={restaurantId}>{restaurant.name}</Link>;
};
