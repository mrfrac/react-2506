import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import type { RootState } from '../../redux/store.ts';
import { Menu } from '../menu/Menu.tsx';

export const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }

  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Menu dishesIds={restaurant.menu} />;
};
