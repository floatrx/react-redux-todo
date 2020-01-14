import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { todosReducer } from '../features/todos/todosSlice';
import { statusReducer } from '../features/status/statusSlice';

// Middleware
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Reducers
const rootReducer = combineReducers({
  todos: todosReducer,
  status: statusReducer,
});

// Store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
