import { useParams } from 'react-router';
import { Cart } from '../../components/cart/Cart.tsx';
import { MenuItem } from '../../components/menu/MenuItem.tsx';

export const DishPage = () => {
  const { dishId } = useParams();

  if (!dishId) {
    return null;
  }

  return (
    <>
      <Cart />
      <MenuItem dishId={dishId} showCounters={true} />
    </>
  );
};
