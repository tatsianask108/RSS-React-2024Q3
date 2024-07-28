import React, { useContext } from 'react';

export const ThemeContext = React.createContext<boolean | undefined>(undefined);
export const ThemeUpdateContext = React.createContext<(() => void) | undefined>(undefined);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};
