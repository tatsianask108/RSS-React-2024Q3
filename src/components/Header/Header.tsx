import Search from '../Search/Search';
import styles from './Header.module.css';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className={styles.test}>
          <h1>Search</h1>
          <Search />
        </header>
      </>
    );
  }
}

export default Header;
