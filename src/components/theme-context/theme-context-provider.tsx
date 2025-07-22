import { type FunctionComponent, type ReactNode, useState } from 'react';
import { ThemeContext } from './theme-context.ts';

type ThemesType = 'light' | 'dark';

export type ThemeContextType = {
  theme: ThemesType;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemesType>('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
