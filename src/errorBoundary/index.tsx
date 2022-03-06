import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  renderComponent: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: unknown) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      // this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.renderComponent;
      }
      return this.props.children; 
    }
  }