import type { FunctionComponent } from 'react';
import { ReviewForm } from '../review-form/ReviewForm.tsx';
import { useUser } from '../user-context/use-user.ts';
import styles from './restaurant-card.module.css';
import { Menu } from '../menu/Menu.tsx';
import { Reviews } from '../reviews/Reviews.tsx';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import type { RootState } from '../../redux/store.ts';

type RestaurantCardProps = {
  restaurantId: string;
};

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({
  restaurantId,
}) => {
  const { user } = useUser();
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div className={styles.card}>
      <h3>{restaurant.name}</h3>

      <h4>Меню</h4>
      <Menu dishesIds={restaurant.menu} />

      <h4>Отзывы</h4>
      <Reviews reviewsIds={restaurant.reviews} />

      {user && <ReviewForm />}
    </div>
  );
};
