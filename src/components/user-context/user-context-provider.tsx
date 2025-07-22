import { type FunctionComponent, type ReactNode, useState } from 'react';
import { UserContext } from './user-context.ts';

const USERNAME_MOCK = 'root';

export type UserContextType = {
  user?: string;
  login: () => void;
  logout: () => void;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider: FunctionComponent<
  UserContextProviderProps
> = ({ children }) => {
  const [user, setUser] = useState<string | undefined>(undefined);

  const login = () => setUser(USERNAME_MOCK);
  const logout = () => setUser(undefined);

  return <UserContext value={{ user, login, logout }}>{children}</UserContext>;
};
