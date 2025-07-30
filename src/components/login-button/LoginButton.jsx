import { useUser } from '../user-context/use-user.js';

export const LoginButton = () => {
  const { user, login, logout } = useUser();

  return user ? (
    <button type="button" onClick={logout}>
      {user}
    </button>
  ) : (
    <button type="button" onClick={login}>
      Login
    </button>
  );
};
