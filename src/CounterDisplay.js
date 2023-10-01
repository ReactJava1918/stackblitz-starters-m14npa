// CounterDisplay.js

import React from 'react';
import { useCounter } from './CounterContext';

function CounterDisplay() {
  const { count } = useCounter();

  return <div>Count: {count}</div>;
}

export default CounterDisplay;
