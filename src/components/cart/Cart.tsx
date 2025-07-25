import { useSelector } from 'react-redux';
import { selectCartItemsIds } from '../../redux/entities/cart/slice.ts';
import styles from './cart.module.css';
import { CartItem } from './CartItem.tsx';

export const Cart = () => {
  const cartItems = useSelector(selectCartItemsIds);

  return (
    <div className={styles.cart}>
      {cartItems.map((cartItemId) => (
        <CartItem key={cartItemId} dishId={cartItemId} />
      ))}
    </div>
  );
};
