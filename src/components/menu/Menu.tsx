import type { FunctionComponent } from 'react';
import { MenuItem } from './MenuItem.tsx';
import { Link } from 'react-router';

type MenuProps = {
  dishesIds: string[];
};

export const Menu: FunctionComponent<MenuProps> = ({ dishesIds }) => {
  return (
    <ul>
      {dishesIds.map((dishId) => (
        <li key={dishId}>
          <Link to={`/dish/${dishId}`}>
            <MenuItem dishId={dishId} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
