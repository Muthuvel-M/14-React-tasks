import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method is called when an error is thrown in a child component
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  // You can also log the error to an external service here
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if there's an error
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    // Render the children components (normal render path)
    return this.props.children;
  }
}

export default ErrorBoundary;
