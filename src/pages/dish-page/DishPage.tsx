import { useParams } from 'react-router';
import { MenuItem } from '../../components/menu/MenuItem.tsx';
import { Cart } from '../../components/cart/Cart.tsx';

export const DishPage = () => {
  const { dishId } = useParams();

  if (!dishId) {
    return null;
  }

  return (
    <>
      <Cart />
      <MenuItem dishId={dishId} />
    </>
  );
};
