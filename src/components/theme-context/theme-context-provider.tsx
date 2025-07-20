import {
  createContext,
  type FunctionComponent,
  type ReactNode,
  useState,
} from 'react';

export type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
