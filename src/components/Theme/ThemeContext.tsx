import React, { ReactNode, useContext, useState } from 'react';

const ThemeContext = React.createContext<boolean | undefined>(undefined);
const ThemeUpdateContext = React.createContext<(() => void) | undefined>(undefined);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
