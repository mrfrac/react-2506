import { useParams } from 'react-router';
import { Cart } from '../../components/cart/Cart.jsx';
import { MenuItem } from '../../components/menu/MenuItem.jsx';

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
