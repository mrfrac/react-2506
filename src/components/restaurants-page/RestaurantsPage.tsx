import classNames from 'classnames';
import { useState } from 'react';
import { RestaurantCard } from '../restaurant-card/RestaurantCard.tsx';
import { useTheme } from '../theme-context/use-theme.ts';
import styles from './restaurant-page.module.css';
import { useSelector } from 'react-redux';
import {
  selectDefaultRestaurantId,
  selectRestaurantById,
  selectRestaurants,
} from '../../redux/entities/restaurants/slice.ts';

export const RestaurantsPage = () => {
  const restaurants = useSelector(selectRestaurants);
  const defaultRestaurantId = useSelector(selectDefaultRestaurantId);
  const [selectedId, setSelectedId] = useState<string>(defaultRestaurantId);
  const selectedRestaurant = useSelector((state) =>
    selectRestaurantById(state, selectedId)
  );
  const { theme } = useTheme();

  return (
    <>
      <ul className={styles.list}>
        {Object.values(restaurants).map((restaurant) => (
          <li key={restaurant.id}>
            <button
              type="button"
              className={classNames(styles.restaurantButton, {
                [styles.activeItem]: selectedId === restaurant.id,
                [styles.dark]: theme === 'dark',
                [styles.light]: theme === 'light',
              })}
              onClick={() => setSelectedId(restaurant.id)}
            >
              <h2>{restaurant.name}</h2>
            </button>
          </li>
        ))}
      </ul>

      {selectedRestaurant && <RestaurantCard restaurant={selectedRestaurant} />}
    </>
  );
};
