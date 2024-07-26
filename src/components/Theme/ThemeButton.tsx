import { useTheme, useThemeUpdate } from './ThemeContext';
import Button from '../shared/Button/Button';

const ThemeToggler = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const handleClick = () => {
    toggleTheme && toggleTheme();
    document.body.classList.toggle('darkTheme');
  };

  return <Button onClick={handleClick}>Switch to {darkTheme ? 'Light' : 'Dark'} Mode</Button>;
};

export default ThemeToggler;
