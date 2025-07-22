import classNames from 'classnames';
import { type FunctionComponent, useState } from 'react';
import type { Restaurant } from '../../types';
import { RestaurantCard } from '../restaurant-card/RestaurantCard.tsx';
import { useTheme } from '../theme-context/use-theme.ts';
import styles from './restaurant-page.module.css';

type RestaurantsPageProps = {
  restaurants: Restaurant[];
};

export const RestaurantsPage: FunctionComponent<RestaurantsPageProps> = ({
  restaurants,
}) => {
  const [selectedId, setSelectedId] = useState<string>(restaurants[0].id);
  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedId
  );
  const { theme } = useTheme();

  return (
    <>
      <ul className={styles.list}>
        {restaurants.map((restaurant) => (
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
