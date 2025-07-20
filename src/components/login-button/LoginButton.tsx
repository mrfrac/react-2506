import { useUser } from '../user-context/use-user.ts';

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
