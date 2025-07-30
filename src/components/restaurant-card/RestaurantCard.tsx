import type { FunctionComponent } from 'react';
import styles from './restaurant-card.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import type { RootState } from '../../redux/store.ts';

type RestaurantCardProps = {
  restaurantId: string;
};

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({
  restaurantId,
}) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div className={styles.card}>
      <h3>{restaurant.name}</h3>
    </div>
  );
};
