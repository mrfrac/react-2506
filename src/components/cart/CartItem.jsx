import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.js';
import styles from './cart.module.css';
import { selectAmountById } from '../../redux/entities/cart/slice.js';

export const CartItem = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const amount = useSelector((state) => selectAmountById(state, dishId));

  return (
    <div className={styles.cartItem}>
      <span>
        {dish.name} x {amount}
      </span>
      <span>{amount * dish.price} &#x20bd;</span>
    </div>
  );
};
