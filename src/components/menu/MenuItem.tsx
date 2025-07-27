import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.ts';
import type { RootState } from '../../redux/store.ts';
import { DishCounter } from '../dish-counter/DishCounter.tsx';
import { useUser } from '../user-context/use-user.ts';

type MenuItemProps = {
  dishId: string;
  showCounters: boolean;
};

export const MenuItem: FC<MenuItemProps> = ({ dishId, showCounters }) => {
  const { user } = useUser();
  const dish = useSelector((state: RootState) => selectDishById(state, dishId));

  return (
    <>
      {dish.name} ({dish.ingredients.join(', ')}): {dish.price} &#x20bd;
      {user && showCounters && <DishCounter dishId={dishId} />}
    </>
  );
};
