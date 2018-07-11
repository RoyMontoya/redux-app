import {getTodos, createTodos, updateTodo} from '../lib/todoServices'
import {showMessage} from './message'


const initState = {
  todos: [],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_ADD = 'TODO_ADD'
export  const TODO_LOAD = 'TODOS_LOAD'



export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload:todo})
export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload:val})
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

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo:'', todos: state.todos.concat(action.payload)}
    case TODO_LOAD:
      return {...state, todos: action.payload}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
        return state;
  }
}
