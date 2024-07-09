import styles from './Header.module.css';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.test}>
        <h1>Welcome to Star Wars!</h1>
      </header>
    );
  }
}

export default Header;
