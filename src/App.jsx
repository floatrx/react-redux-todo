import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import Stats from './components/Stats';

import { todosActions } from './actions/todosActions';

import './App.scss';

class App extends Component {
  componentDidMount = () => {
    this.props.load();
  };

  render() {
    const { todos } = this.props;
    return (
      <main className="App todo">
        <Header title={this.props.title} todos={todos} />
        <Stats todos={todos} />

        <section className="todo__list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onChange={this.props.toggle}
              onDelete={this.props.remove}
              onEdit={this.props.edit}
            />
          ))}
        </section>

        <Form onAdd={this.props.add} />
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
};

const mapStateToProps = ({ todos }) => ({ todos });
const mapDispatchToProps = (dispatch) => bindActionCreators(todosActions, dispatch);
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);

export { connectedComponent as App };
