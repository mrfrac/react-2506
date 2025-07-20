import { useContext } from 'react';
import { type ThemeContextType } from './theme-context-provider.tsx';
import { ThemeContext } from './theme-context.ts';

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);
