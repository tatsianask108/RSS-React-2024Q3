import React, { ReactNode, useState } from 'react';
import { ThemeContext, ThemeUpdateContext } from '../../hooks/themes';

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
