import type { FunctionComponent } from 'react';
import { Link } from 'react-router';
import { MenuItem } from './MenuItem.tsx';

type MenuProps = {
  dishesIds: string[];
  showCounters: boolean;
};

export const Menu: FunctionComponent<MenuProps> = ({
  dishesIds,
  showCounters,
}) => {
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
