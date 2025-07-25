import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.ts';
import classNames from 'classnames';
import styles from '../restaurants-page/restaurant-page.module.css';
import { useTheme } from '../theme-context/use-theme.ts';
import type { RootState } from '../../redux/store.ts';

type RestaurantButtonProps = {
  restaurantId: string;
  active: boolean;
  onClick: (_id: string) => void;
};

export const RestaurantButton: FC<RestaurantButtonProps> = ({
  restaurantId,
  active,
  onClick,
}) => {
  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId)
  );
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className={classNames(styles.restaurantButton, {
        [styles.activeItem]: active,
        [styles.dark]: theme === 'dark',
        [styles.light]: theme === 'light',
      })}
      onClick={() => onClick(restaurant.id)}
    >
      <h2>{restaurant.name}</h2>
    </button>
  );
};
