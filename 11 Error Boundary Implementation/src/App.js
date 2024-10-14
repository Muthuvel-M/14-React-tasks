import React from 'react';
import ChildComponent from './ChildComponent';
import ErrorBoundary from './ErrorBoundary';  // Import ErrorBoundary

function App() {
  return (
    <div className="App">
      <h1>Hello,Buddy!</h1>

      {/* Wrap the ChildComponent with ErrorBoundary */}
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
