import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React with redux</h1>
      </header>
      <div className="todo-app">
        <form>
          <input type="text"/>
        </form>
        <div className="todo-list">
          <ul>
            <li>
              <input type="checkbox"/>
              Create Static UI
            </li>
            <li>
              <input type="checkbox"/>
              Create Static UI
            </li>
            <li>
              <input type="checkbox"/>
              Create Static UI
            </li>
          </ul>
        </div>
      </div>
    </div>);
  }
}

export default App;
