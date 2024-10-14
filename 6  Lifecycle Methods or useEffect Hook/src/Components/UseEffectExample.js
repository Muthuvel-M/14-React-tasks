// src/UseEffectExample.js
import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect: Component has mounted or updated.');
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log('Cleanup: Component will unmount or before next effect.');
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount.

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default UseEffectExample;
