import React, { Component } from 'react';
import './App.css';

class AppUsingConstructor extends Component {

    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
    }
  
    incrementCount = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  
    decrementCount = () => {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  
    resetCount = () => {
      this.setState({
        counter: 0
      });
    }
  
    render() {
      return (
        <div className="App1">
          <h1>AppUsingConstructor</h1>
          <header className="App-header">
            <div>{this.state.counter}</div>
          </header>
          <div className="App-body">
            <p>
              Click <code>+</code> or <code>-</code> buttons to change the value in board above
            </p>
            <button className="App-button" onClick={this.incrementCount}>+</button>
            <button className="App-button" onClick={this.decrementCount}>-</button>
            <button className="App-button" onClick={this.resetCount}>Reset</button>
          </div>
        </div>
      );
    }
    
  }

  export default AppUsingConstructor;