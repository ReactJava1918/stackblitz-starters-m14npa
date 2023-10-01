// CounterButtons.js

import React from 'react';
import { useCounter } from './CounterContext';

function CounterButtons() {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterButtons;
