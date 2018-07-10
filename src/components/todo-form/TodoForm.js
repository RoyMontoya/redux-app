import React, {Component} from 'react';
import {connect} from 'react-redux'
import {updateCurrent} from '../../reducers/todo'

const TodoForm = (props) => {

  const {currentTodo, updateCurrent} = props

  const handleInputChange = (e) => (updateCurrent(e.target.value) )


  return (
  <form>
    <input type="text"
      onChange={handleInputChange}
      value={currentTodo}/>
  </form>
)}

export default connect(
  (state) => ({currentTodo: state.currentTodo},
  {updateCurrent })
)(TodoForm)
