import { NavLink, Outlet, useParams } from 'react-router';
import classNames from 'classnames';
import styles from './restaurant-page.module.css';
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
          <NavLink to="menu" className={styles.navLink}>
            {({ isActive }) => (
              <span className={classNames({ [styles.active]: isActive })}>
                Меню
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={styles.navLink}>
            {({ isActive }) => (
              <span className={classNames({ [styles.active]: isActive })}>
                Отзывы
              </span>
            )}
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
