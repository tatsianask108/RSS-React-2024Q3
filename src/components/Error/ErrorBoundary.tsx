import React from 'react';

import { IErrorProps, IErrorState } from './types';

class ErrorBoundary extends React.Component<IErrorProps, IErrorState> {
  state: IErrorState = {
    hasError: false,
  };

  static getDerivedStateFromError(): IErrorState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
