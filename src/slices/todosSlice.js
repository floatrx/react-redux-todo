import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    loadTodos(state, { payload }) {
      const { todos } = payload;
      return todos || state;
    },
    addTodo(state, { payload }) {
      const { todo } = payload;
      state.push(todo);
    },
    removeTodo(state, { payload }) {
      return state.filter((todo) => todo.id !== payload.id);
    },
    editTodo(state, { payload }) {
      const todo = state.find((todo) => todo.id === payload.id);
      if (todo) todo.title = payload.title;
    },
    toggleTodo(state, { payload }) {
      const todo = state.find((todo) => todo.id === payload.id);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { loadTodos, addTodo, removeTodo, editTodo, toggleTodo } = todosSlice.actions
export const todosReducer = todosSlice.reducer;
