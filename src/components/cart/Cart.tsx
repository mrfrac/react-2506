import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/entities/cart/slice.ts';
import styles from './cart.module.css';
import { CartItem } from './CartItem.tsx';

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  if (cartItems.length === 0) {
    return <span>Пусто</span>;
  }

  return (
    <div className={styles.cart}>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          dishId={cartItem.id}
          amount={cartItem.amount}
        />
      ))}
    </div>
  );
};
