import { useState } from 'react';
import { RestaurantCard } from '../restaurant-card/RestaurantCard.tsx';
import styles from './restaurant-page.module.css';
import { useSelector } from 'react-redux';
import {
  selectDefaultRestaurantId,
  selectRestaurantsIds,
} from '../../redux/entities/restaurants/slice.ts';
import { Cart } from '../cart/Cart.tsx';
import { useUser } from '../user-context/use-user.ts';
import { RestaurantButton } from '../restaurant-button/RestaurantButton.tsx';

export const RestaurantsPage = () => {
  const { user } = useUser();
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const defaultRestaurantId = useSelector(selectDefaultRestaurantId);
  const [selectedId, setSelectedId] = useState<string>(defaultRestaurantId);

  return (
    <>
      {user && <Cart />}
      <ul className={styles.list}>
        {restaurantsIds.map((restaurantId) => (
          <li key={restaurantId}>
            <RestaurantButton
              restaurantId={restaurantId}
              active={selectedId === restaurantId}
              onClick={() => setSelectedId(restaurantId)}
            />
          </li>
        ))}
      </ul>

      {selectedId && <RestaurantCard restaurantId={selectedId} />}
    </>
  );
};
