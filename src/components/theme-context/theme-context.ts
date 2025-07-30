import { createContext } from 'react';
import type { ThemeContextType } from './theme-context-provider.jsx';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
