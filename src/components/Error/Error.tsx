import React from 'react';

interface IProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  state: IState = {
    hasError: false,
  };

  static getDerivedStateFromError(): IState {
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
