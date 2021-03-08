import React from "react";

// to-do: hoc with custom component
export class ErrorBoundary extends React.Component {
    state: {hasError: boolean};

    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error: any) {
        return { hasError: true };
      }
    
      componentDidCatch(error: any, errorInfo: any) {
        console.log('error log', error, errorInfo);
      }
    
      render() {
        return this.state.hasError
            ? (<h1>Something going wrong...</h1>)
            : this.props.children; 
      }
}

