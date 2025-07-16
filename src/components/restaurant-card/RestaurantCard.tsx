import type { FunctionComponent } from 'react';
import type { Restaurant } from '../../types';
import { Menu } from '../menu/Menu.tsx';
import { ReviewForm } from '../review-form/ReviewForm.tsx';
import { Reviews } from '../reviews/Reviews.tsx';
import styles from './restaurant-card.module.css';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({
  restaurant,
}) => {
  return (
    <div className={styles.card}>
      <h3>{restaurant.name}</h3>

      <h4>Меню</h4>
      <Menu menu={restaurant.menu} />

      <h4>Отзывы</h4>
      <Reviews reviews={restaurant.reviews} />

      <ReviewForm />
    </div>
  );
};
