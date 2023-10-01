// CounterButtons.js

// Import the React library
import React from 'react';

// Import the custom hook 'useCounter' from the 'CounterContext' file
import { useCounter } from './CounterContext';

// Define a functional component named 'CounterButtons'
function CounterButtons() {
  // Use the 'useCounter' hook to access 'increment' and 'decrement' functions from context
  const { increment, decrement } = useCounter();

  // Return a JSX element
  return (
    <div>
      {/* Button that calls the 'increment' function when clicked */}
      <button onClick={increment}>Increment</button>
      {/* Button that calls the 'decrement' function when clicked */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Export the 'CounterButtons' component as the default export
export default CounterButtons;
