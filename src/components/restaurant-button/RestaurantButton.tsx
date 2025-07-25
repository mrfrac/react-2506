import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import type { RootState } from '../../redux/store.ts';
import { Link } from 'react-router';

type RestaurantButtonProps = {
  restaurantId: string;
};

export const RestaurantButton: FC<RestaurantButtonProps> = ({
  restaurantId,
}) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Link to={restaurantId}>{restaurant.name}</Link>;
};
