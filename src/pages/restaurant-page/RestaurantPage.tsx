import { Outlet, useParams } from 'react-router';
import { Link } from '../../components/link/Link.tsx';
import { RestaurantCard } from '../../components/restaurant-card/RestaurantCard.tsx';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  if (!restaurantId) {
    return null;
  }

  return (
    <>
      <RestaurantCard restaurantId={restaurantId} />
      <ul>
        <li>
          <Link to="menu" label="Меню" />
        </li>
        <li>
          <Link to="reviews" label="Отзывы" />
        </li>
      </ul>
      <Outlet />
    </>
  );
};
