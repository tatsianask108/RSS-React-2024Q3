import styles from './Loader.module.css';
import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.loader}></div>
      </div>
    );
  }
}

export default Loader;
