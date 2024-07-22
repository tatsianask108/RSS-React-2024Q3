import { useTheme, useThemeUpdate } from './ThemeContext';
import Button from '../shared/Button/Button';

const ThemeToggler = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const handleClick = () => {
    toggleTheme && toggleTheme();
    document.body.classList.toggle('darkTheme');
  };

  return <Button onClick={handleClick}>{darkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</Button>;
};

export default ThemeToggler;
