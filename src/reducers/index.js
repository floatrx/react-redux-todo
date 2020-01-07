import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { statusReducer } from './statusReducer';

// Reducer
export const rootReducer = combineReducers({
  todos: todosReducer,
  status: statusReducer,
});
