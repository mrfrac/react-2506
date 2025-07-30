import styles from './restaurant-page.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/slice.js';
import { Cart } from '../cart/Cart.jsx';
import { useUser } from '../user-context/use-user.js';
import { RestaurantButton } from '../restaurant-button/RestaurantButton.jsx';

export const RestaurantsPage = () => {
  const { user } = useUser();
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <>
      {user && <Cart />}
      <ul className={styles.list}>
        {restaurantsIds.map((restaurantId) => (
          <li key={restaurantId}>
            <RestaurantButton restaurantId={restaurantId} />
          </li>
        ))}
      </ul>
    </>
  );
};
