import {getTodos, createTodos, updateTodo} from '../lib/todoServices'
import {showMessage} from './message'


const initState = {
  todos: [],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_ADD = 'TODO_ADD'
export const TODO_LOAD = 'TODOS_LOAD'
export const TODO_REPLACE = 'TODOS_REPLACE'


export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload:todo})
export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload:val})
export const replaceTodo = (todo) => ({type:TODO_REPLACE, payload:todo})
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading Todos'))
    getTodos().then(todos => dispatch(loadTodos(todos)))
  }
}
export const saveTodo = (name) =>{
  return (dispatch) => {
      dispatch(showMessage('saving Todo'))
      createTodos(name).then(res => {
        dispatch(addTodo(res)
      )})
  }
}

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Saving Todo update'))
    const {todos} = getState().todo
    const todo = todos.find(t => t.id === id)
    const toggled = { ...todo, isComplete: !todo.isComplete}
    updateTodo(toggled)
      .then(res => dispatch(replaceTodo(res)))
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo:'', todos: state.todos.concat(action.payload)}
    case TODO_LOAD:
      return {...state, todos: action.payload}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    case TODO_REPLACE:
      return {...state,
        todos: state.todos.map(t => t.id === action.payload.id
          ? action.payload
          : t)}
    default:
        return state;
  }
}
