import { todosConst } from '../actions/todosActions';

const initialState = [];

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case todosConst.LOAD:
      return payload.todos;
    case todosConst.ADD:
      return [...state, payload.todo];
    case todosConst.REMOVE:
      return state.filter((todo) => todo.id !== payload.id);
    case todosConst.EDIT:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          todo.title = payload.title;
        }
        return todo;
      });
    case todosConst.TOGGLE:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};
