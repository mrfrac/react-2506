import { createSlice, type EntityState } from '@reduxjs/toolkit';
import type { User } from '../../../types/user.ts';
import { normalizedUsers } from '../../../constants/normalized-mock.ts';

const initialState: EntityState<User, string> = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce(
    (acc, user) => {
      acc[user.id] = user;

      return acc;
    },
    {} as Record<string, User>
  ),
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUserById: (state: EntityState<User, string>, id: string) =>
      state.entities[id],
  },
  reducers: {},
});

export const { selectUserById } = usersSlice.selectors;
