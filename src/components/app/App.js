import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import TodoForm from '../todo-form/TodoForm'
import TodoList from '../todo-list/TodoList'
import {connect} from 'react-redux'
import Message from '../message/Message'

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React with redux</h1>
      </header>
      <div className="todo-app">
        <Message/>
        <TodoForm/>
        <TodoList/>
      </div>
    </div>);
  }
}

export default App
