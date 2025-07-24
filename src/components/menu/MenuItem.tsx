import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.ts';
import { DishCounter } from '../dish-counter/DishCounter.tsx';
import { useUser } from '../user-context/use-user.ts';

type MenuItemProps = {
  dishId: string;
};

export const MenuItem: FC<MenuItemProps> = ({ dishId }) => {
  const { user } = useUser();
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <>
      {dish.name} ({dish.ingredients.join(', ')}): {dish.price} &#x20bd;
      {user && <DishCounter dishId={dishId} />}
    </>
  );
};
