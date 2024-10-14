import React from 'react';
import { useCount } from '../context/CountContext';

function ChildB() {
  const { count, setCount } = useCount();

  return (
    <div>
      <h2>Child B</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default ChildB;
