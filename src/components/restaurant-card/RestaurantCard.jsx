import styles from './restaurant-card.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.js';

export const RestaurantCard = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div className={styles.card}>
      <h3>{restaurant.name}</h3>
    </div>
  );
};
