import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.ts';
import styles from './cart.module.css';
import { selectAmountById } from '../../redux/entities/cart/slice.ts';

type CartItemProps = {
  dishId: string;
};

export const CartItem: FC<CartItemProps> = ({ dishId }) => {
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
