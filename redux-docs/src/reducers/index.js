// actions describe something happened, but doesn't specify
// how the apps state changes in response. This is the job of reucers
import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions';

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
// todos accepts state but it's an ARRAY! todoApp just gives it the slice of the state
// to manage and todos knows how to upate just that slice *it's called 'reducer composition
// it's the fundamental patter of builing redux apps.
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      // here also, we never write directly to state or its fields
      // instead we return new objects
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;