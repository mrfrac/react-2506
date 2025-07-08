import type { FunctionComponent } from 'react';

type MenuProps = {
  menu: Menu[];
};

export const Menu: FunctionComponent<MenuProps> = ({ menu }) => {
  return (
    <ul>
      {menu.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name} ({menuItem.ingredients.join(', ')}): {menuItem.price}{' '}
          &#x20bd;
        </li>
      ))}
    </ul>
  );
};
