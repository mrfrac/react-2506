import type { FunctionComponent } from 'react';
import type { Menu as MenuType } from '../../types';
import { Counter } from '../counter/Counter.tsx';

type MenuProps = {
  menu: MenuType[];
};

export const Menu: FunctionComponent<MenuProps> = ({ menu }) => {
  return (
    <ul>
      {menu.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name} ({menuItem.ingredients.join(', ')}): {menuItem.price}{' '}
          &#x20bd; <Counter />
        </li>
      ))}
    </ul>
  );
};
