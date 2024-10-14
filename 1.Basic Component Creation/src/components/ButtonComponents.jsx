import React from 'react';

const ButtonComponent = () => {
 
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click Me!
    </button>
  );
};

export default ButtonComponent;
