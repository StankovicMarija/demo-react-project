import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('didCatch', { error, errorInfo });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    // console.log('render', hasError, error, errorInfo);

    if (!hasError) return children;
    return (
      <div style={{ background: 'red' }}>
        <p>Something went wrong</p>
        {error && <span>error: {error}</span>}
      </div>
    );
  }
}
export default ErrorBoundary;
