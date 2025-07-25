import type { FunctionComponent } from 'react';
import { MenuItem } from './MenuItem.tsx';

type MenuProps = {
  dishesIds: string[];
};

export const Menu: FunctionComponent<MenuProps> = ({ dishesIds }) => {
  return (
    <ul>
      {dishesIds.map((dishId) => (
        <li key={dishId}>
          <MenuItem dishId={dishId} />
        </li>
      ))}
    </ul>
  );
};
