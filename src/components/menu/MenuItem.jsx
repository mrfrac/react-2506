import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.js';
import { DishCounter } from '../dish-counter/DishCounter.jsx';
import { useUser } from '../user-context/use-user.js';

export const MenuItem = ({ dishId, showCounters }) => {
  const { user } = useUser();
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <>
      {dish.name} ({dish.ingredients.join(', ')}): {dish.price} &#x20bd;
      {user && showCounters && <DishCounter dishId={dishId} />}
    </>
  );
};
