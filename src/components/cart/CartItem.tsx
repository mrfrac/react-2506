import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice.ts';
import styles from './cart.module.css';

type CartItemProps = {
  dishId: string;
  amount: number;
};

export const CartItem: FC<CartItemProps> = ({ dishId, amount }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <div className={styles.cartItem}>
      <span>
        {dish.name} x {amount}
      </span>
      <span>{amount * dish.price} &#x20bd;</span>
    </div>
  );
};
