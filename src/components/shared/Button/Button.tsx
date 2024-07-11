import { FC } from 'react';
import { IButton } from './types';

const Button: FC<IButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
