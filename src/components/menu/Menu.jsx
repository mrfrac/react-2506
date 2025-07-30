import { Link } from 'react-router';
import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ dishesIds, showCounters }) => {
  return (
    <ul>
      {dishesIds.map((dishId) => (
        <li key={dishId}>
          <Link to={`/dish/${dishId}`}>
            <MenuItem showCounters={showCounters} dishId={dishId} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
