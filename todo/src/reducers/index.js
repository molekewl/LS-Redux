import { combineReducers } from 'redux';
import todoReducers from './todos';
import selectedTaskReducers from './selectedTask'

const rootReducer = combineReducers({
  todos: todoReducers,
  selectedTask: selectedTaskReducers
});

export default rootReducer;