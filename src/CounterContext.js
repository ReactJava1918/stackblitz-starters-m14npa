// CounterContext.js

// Import necessary modules from React library
import React, { createContext, useContext, useState } from 'react';

// Create a new React context called CounterContext
const CounterContext = createContext();

// Define a function component named CounterProvider that takes a 'children' prop
export function CounterProvider({ children }) {
  // Use the useState hook to create a 'count' state variable initialized to 0
  const [count, setCount] = useState(0);

  // Define an 'increment' function that increases the 'count' state
  const increment = () => {
    setCount(count + 1);
  };

  // Define a 'decrement' function that decreases the 'count' state
  const decrement = () => {
    setCount(count - 1);
  };

  // Return a context provider that provides 'count', 'increment', and 'decrement' as values
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

// Define a custom hook named useCounter that returns the context's value
export function useCounter() {
  return useContext(CounterContext);
}
