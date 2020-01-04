// ActionTypes
import { notify } from '../vendor/notifications';
import { axios } from '../helpers/axios';

// Constants
export const todosConst = {
  LOAD: 'TODOS_LOAD',
  EDIT: 'TODOS_EDIT',
  TOGGLE: 'TODOS_TOGGLE',
  REMOVE: 'TODOS_REMOVE',
  ADD: 'TODOS_ADD',
};

// Public
export const todosActions = {
  load,
  add,
  remove,
  edit,
  toggle,
  complete,
};

// Actions
function load() {
  return (dispatch) => {
    axios
      .get('/api/todos')

      .then(({ data: todos }) => {
        dispatch(loadTodos({ todos }));
      })
      .catch(console.error);

    const loadTodos = (payload) => ({ type: todosConst.LOAD, payload });
  };
}

function add(title) {
  return (dispatch) => {
    axios
      .post('/api/todos', { title })

      .then(({ data: todo }) => {
        dispatch(addTodo({ todo }));
        notify.success({ message: 'Created' });
      })
      .catch(console.error);

    const addTodo = (payload) => ({ type: todosConst.ADD, payload });
  };
}

function remove(id) {
  return (dispatch) => {
    axios
      .delete(`/api/todos/${id}`)

      .then((response) => {
        dispatch(removeTodo({ id }));
        notify.show({ message: 'Deleted' });
      })
      .catch(console.error);

    const removeTodo = (payload) => ({ type: todosConst.REMOVE, payload });
  };
}

function edit(id, title) {
  return (dispatch) => {
    axios
      .put(`/api/todos/${id}`, { title })
      .then((response) => {
        dispatch(editTodo({ id, title }));
        notify.success({ title: 'Updated', message: `New title "${title}"` });
      })
      .catch(console.error);

    const editTodo = (payload) => ({ type: todosConst.EDIT, payload });
  };
}

function toggle(id) {
  return (dispatch) => {
    axios
      .patch(`/api/todos/${id}`)
      .then(() => {
        dispatch(toggleTodo({ id }));
      })
      .catch(console.error);

    const toggleTodo = (payload) => ({ type: todosConst.TOGGLE, payload });
  };
}

function complete(id) {
  return (dispatch) => {
    // API
  };
}
