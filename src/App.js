import React from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.js'
import Counter from './Components/Counter/Counter.js'
import CounterX from './Components/CounterX/Counter.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StopWatch />
        <Counter />
        <CounterX />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
