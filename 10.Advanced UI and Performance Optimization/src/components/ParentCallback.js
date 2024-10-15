import React, { useState, useCallback } from "react";

const ChildComponent = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

const ParentCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentCallback;
