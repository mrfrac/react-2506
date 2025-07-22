import { useContext } from 'react';
import { type UserContextType } from './user-context-provider.tsx';
import { UserContext } from './user-context.ts';

export const useUser = () => useContext<UserContextType>(UserContext);
