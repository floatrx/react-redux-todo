import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import Stats from './components/Stats';

import { todosActions } from './actions/todosActions';

import './App.scss';
import { AppStatus } from './components/AppStatus';

function App(props) {
  const { getTodos, todos, status, onAdd, onToggle, onRemove, onEdit } = props;

  useEffect(getTodos, []);

  return (
    <main className="App todo">
      <Header title={props.title} todos={todos} />
      <Stats todos={todos} />
      <section className="todo__list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onChange={onToggle}
            onDelete={onRemove}
            onEdit={onEdit}
          />
        ))}
      </section>
      <Form onAdd={onAdd} />
      <AppStatus status={status} />
    </main>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

App.defaultProps = {
  todos: [],
};

const mapStateToProps = ({ todos, status }) => ({ todos, status });
const mapDispatchToProps = (dispatch) => bindActionCreators(todosActions, dispatch);
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export { connectedComponent as App };
