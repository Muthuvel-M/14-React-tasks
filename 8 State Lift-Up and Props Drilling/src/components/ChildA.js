import React from 'react';
import { useCount } from '../context/CountContext';

function ChildA() {
  const { count, setCount } = useCount();

  return (
    <div>
      <h2>Child A</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ChildA;
