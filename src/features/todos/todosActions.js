// ActionTypes
import { notify } from '../../vendor/notifications';
import { axios } from '../../helpers/axios';
import { showSpinner, hideSpinner } from '../status/statusSlice';

import { loadTodos, addTodo, removeTodo, editTodo, toggleTodo } from './todosSlice';

// Public
export const todosActions = { getTodos, onAdd, onRemove, onEdit, onToggle };

// Actions
function getTodos() {
  return (dispatch) => {
    dispatch(showSpinner('Loading'));

    axios
      .get('/api/todos')

      .then(({ data: todos }) => {
        dispatch(loadTodos({ todos }));
      })
      .finally(() => {
        dispatch(hideSpinner());
      });
  };
}

function onAdd(title) {
  return (dispatch) => {
    axios
      .post('/api/todos', { title })

      .then(({ data: todo }) => {
        dispatch(addTodo({ todo }));
        notify.success({ message: 'Created' });
      })
      .catch(console.error);
  };
}

function onRemove(id) {
  return (dispatch) => {
    axios
      .delete(`/api/todos/${id}`)

      .then((response) => {
        dispatch(removeTodo({ id }));
        notify.show({ message: 'Deleted' });
      })
      .catch(console.error);
  };
}

function onEdit(id, title) {
  console.log('HEY');
  return (dispatch) => {
    axios
      .put(`/api/todos/${id}`, { title })

      .then((response) => {
        dispatch(editTodo({ id, title }));
        notify.success({ title: 'Updated', message: `New title "${title}"` });
      })
      .catch(console.error);
  };
}

function onToggle(id) {
  return (dispatch) => {
    axios
      .patch(`/api/todos/${id}`)

      .then(() => {
        dispatch(toggleTodo({ id }));
      })
      .catch(console.error);
  };
}
