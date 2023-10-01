// CounterDisplay.js

// Import the React library
import React from 'react';

// Import the custom hook 'useCounter' from the 'CounterContext' file
import { useCounter } from './CounterContext';

// Define a functional component named 'CounterDisplay'
function CounterDisplay() {
  // Use the 'useCounter' hook to access the 'count' value from context
  const { count } = useCounter();

  // Return a JSX element that displays the 'count' value
  return <div>Count: {count}</div>;
}

// Export the 'CounterDisplay' component as the default export
export default CounterDisplay;
