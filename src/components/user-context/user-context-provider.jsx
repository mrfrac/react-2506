import { useState } from 'react';
import { UserContext } from './user-context';

const USERNAME_MOCK = 'root';

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const login = () => setUser(USERNAME_MOCK);
  const logout = () => setUser(undefined);

  return <UserContext value={{ user, login, logout }}>{children}</UserContext>;
};
