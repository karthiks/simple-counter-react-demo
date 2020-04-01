import React, { useState } from 'react';
import './App.css';

function AppUsingHooks() {
    const [counter, setCounter] = useState(0);
  
    const incrementCount = () => {
      setCounter(counter+1);
    }
  
    const decrementCount = () => {
      setCounter(counter-1);
    }
  
    const resetCount = () => {
      setCounter(0);
    }
  
    return (
      <div className="App3">
        <h1>AppUsingHooks</h1>
        <header className="App-header">
          <div>{counter}</div>
        </header>
        <div className="App-body">
          <p>
            Click <code>+</code> or <code>-</code> buttons to change the value in board above
          </p>
          <button className="App-button" onClick={incrementCount}>+</button>
          <button className="App-button" onClick={decrementCount}>-</button>
          <button className="App-button" onClick={resetCount}>Reset</button>
        </div>
      </div>
    );
  }

  export default AppUsingHooks;