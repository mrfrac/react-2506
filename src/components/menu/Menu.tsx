import type { FunctionComponent } from 'react';
import type { Menu as MenuType } from '../../types';
import { DishCounter } from '../dish-counter/DishCounter.tsx';
import { useUser } from '../user-context/use-user.ts';

type MenuProps = {
  menu: MenuType[];
};

export const Menu: FunctionComponent<MenuProps> = ({ menu }) => {
  const { user } = useUser();

  return (
    <ul>
      {menu.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name} ({menuItem.ingredients.join(', ')}): {menuItem.price}{' '}
          &#x20bd;
          {user && <DishCounter />}
        </li>
      ))}
    </ul>
  );
};
