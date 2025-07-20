import { createContext } from 'react';
import type { ThemeContextType } from './theme-context-provider.tsx';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
