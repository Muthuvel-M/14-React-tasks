// src/App.js
import React from 'react';
import LifecycleExample from './Components/LifecycleExample';
import UseEffectExample from './Components/UseEffectExample';

function App() {
  return (
    <div className="App">
      <h1>React Lifecycle Methods and useEffect Hook Example</h1>
      <h2>Class Component with Lifecycle Methods</h2>
      <LifecycleExample />
      <h2>Functional Component with useEffect</h2>
      <UseEffectExample />
    </div>
  );
}

export default App;
