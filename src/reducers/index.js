import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';

// Reducer
export const rootReducer = combineReducers({
  todos: todosReducer,
});
