import { FC } from 'react';
import { IButton } from './types';
import styles from './Button.module.css';

const Button: FC<IButton> = ({ children, ...props }) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
