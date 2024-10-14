import React, { createContext, useContext, useState } from 'react';

// Create a context
const CountContext = createContext();

// Create a provider component
export function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// Custom hook for using the Count context
export const useCount = () => {
  return useContext(CountContext);
}
