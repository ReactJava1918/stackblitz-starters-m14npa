// App.js

import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterDisplay from './CounterDisplay';
import CounterButtons from './CounterButtons';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
}

export default App;
