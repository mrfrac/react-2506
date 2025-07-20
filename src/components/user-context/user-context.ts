import { createContext } from 'react';
import type { UserContextType } from './user-context-provider.tsx';

export const UserContext = createContext<UserContextType>({
  user: undefined,
  logout: () => {},
  login: () => {},
});
