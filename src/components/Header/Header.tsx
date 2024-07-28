import ThemeToggler from '../Theme/ThemeButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Welcome to Star Wars!</h1>
      </header>
      <ThemeToggler />
    </>
  );
};

export default Header;
