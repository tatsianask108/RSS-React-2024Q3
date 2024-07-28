import { FC } from 'react';
import { IButton } from './types';
import styles from './Button.module.css';

const Button: FC<IButton> = ({ className, children, ...props }) => {
  const combinedClasses = className ? `${styles.button} ${className}` : `${styles.button}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
