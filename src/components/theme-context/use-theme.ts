import { useContext } from 'react';
import {
  ThemeContext,
  type ThemeContextType,
} from './theme-context-provider.tsx';

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);
