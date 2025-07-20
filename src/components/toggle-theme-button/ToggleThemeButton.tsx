import { useTheme } from '../theme-context/use-theme.ts';

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <button type={'button'} onClick={toggleTheme}>
      Change theme
    </button>
  );
};
