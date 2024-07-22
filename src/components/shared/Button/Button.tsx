import { FC } from 'react';
import { IButton } from './types';
import styles from './Button.module.css';

const Button: FC<IButton> = ({ className, children, ...props }) => {
  return (
    <button className={`${styles.button} ${className} `} {...props}>
      {children}
    </button>
  );
};

export default Button;
