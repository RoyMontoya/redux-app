import React, {Component} from 'react';

export default (props) => {

  const {currentTodo, changeCurrent} = props

  const handleInputChange = (e) => (changeCurrent(e.target.value) )


  return (
  <form>
    <input type="text"
      onChange={handleInputChange}
      value={currentTodo}/>
  </form>
)}
