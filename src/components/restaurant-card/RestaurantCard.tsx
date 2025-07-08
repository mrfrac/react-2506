import type { FunctionComponent } from 'react';
import type { Restaurant } from '../../types';
import { Menu } from '../menu/Menu.tsx';
import { Reviews } from '../reviews/Reviews.tsx';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export const RestaurantCard: FunctionComponent<RestaurantCardProps> = ({
  restaurant,
}) => {
  return (
    <div
      style={{
        padding: '0 16px',
      }}
    >
      <h3>{restaurant.name}</h3>

      <h4>Меню</h4>
      <Menu menu={restaurant.menu} />

      <h4>Отзывы</h4>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
