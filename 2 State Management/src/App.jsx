import React, { useState } from 'react';

const Counter = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className='high'>Counter: {count}</h1>
      <button className='btn1' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='btn2' onClick={() => setCount(count - 1)} /*disabled={count === 0}*/ >
        Decrement
      </button>
    </div>
  );
};

export default Counter;