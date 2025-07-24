import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/users/slice.ts';

type ReviewUserProps = {
  userId: string;
};

export const ReviewUser: FC<ReviewUserProps> = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  return <strong>{user.name}</strong>;
};
