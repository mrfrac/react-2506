import { createSlice, type EntityState } from '@reduxjs/toolkit';
import type { NormalizedUser } from '../../../types/normalized-user.ts';
import { normalizedUsers } from '../../../constants/normalized-mock.ts';

const initialState: EntityState<NormalizedUser, string> = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce(
    (acc, user) => {
      acc[user.id] = user;

      return acc;
    },
    {} as Record<string, NormalizedUser>
  ),
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUserById: (state: EntityState<NormalizedUser, string>, id: string) =>
      state.entities[id],
  },
  reducers: {},
});

export const { selectUserById } = usersSlice.selectors;
