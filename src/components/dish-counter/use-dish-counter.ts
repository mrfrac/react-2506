import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from '../../redux/entities/cart/slice.ts';
import { useCallback } from 'react';
import type { RootState } from '../../redux/store.ts';

type UseDishParams = {
  min: number;
  max: number;
  dishId: string;
};

export const useDishCounter = (params: UseDishParams) => {
  const dispatch = useDispatch();
  const amount = useSelector((state: RootState) =>
    selectAmountById(state, params.dishId)
  );

  const increment = useCallback(
    () => dispatch(addToCart(params.dishId)),
    [dispatch, params.dishId]
  );
  const decrement = useCallback(
    () => dispatch(removeFromCart(params.dishId)),
    [dispatch, params.dishId]
  );

  return {
    value: amount,
    increment,
    decrement,
  };
};
