import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppStatus } from './components/AppStatus';
import { TodoForm } from './components/TodoForm';
import { Header } from './components/Header';
import { Stats } from './components/Stats';
import { TodoItem } from './components/TodoItem';
import { todosActions } from './features/todos/todosActions';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos, status, onAdd, onToggle, onRemove, onEdit } = this.props;
    return (
      <main className="App todo">
        <Header title={this.props.title} todos={todos} />
        <Stats todos={todos} />
        <section className="todo__list">
          {todos.map((todo) => (
            <TodoItem
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
        <TodoForm onAdd={onAdd} />
        <AppStatus status={status} />
      </main>
    );
  }
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
  status: PropTypes.shape({
    isProcessing: PropTypes.bool.isRequired,
    message: PropTypes.string,
  }),
  getTodos: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

App.defaultProps = {
  title: 'React Todo',
  todos: [],
};

const mapStateToProps = ({ todos, status }) => ({ todos, status });
const mapDispatchToProps = (dispatch) => bindActionCreators(todosActions, dispatch);
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export { connectedComponent as App };
