import React from 'react';
import styles from './Error.module.css';

interface IProp {
  onClick: () => void;
}
class ErrorButton extends React.Component<IProp> {
  render() {
    return (
      <button className={styles.errorBtn} type="button" onClick={this.props.onClick}>
        Throw Error
      </button>
    );
  }
}

export default ErrorButton;
