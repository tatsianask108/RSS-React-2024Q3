import styles from './Search.module.css';
import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form className={styles.form}>
        <input type="search" placeholder="Search..." className={styles.input} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
