import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './App.scss';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import Stats from './components/Stats';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            editMode: false
        };
    }

    componentDidMount = () => {
        axios
            .get('/api/todos')
            .then(response => {
                let todos = response.data;
                this.setState({ todos });
            })
            .catch(this.handleError);
    };

    handleToggle = id => {
        axios
            .patch(`/api/todos/${id}`)
            .then(response => {
                let todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = response.data.completed;
                    }
                    return todo;
                });
                this.setState({ todos });
            })
            .catch(this.handleError);
    };

    handleDelete = id => {
        axios
            .delete(`/api/todos/${id}`)
            .then(() => {
                let todos = this.state.todos.filter(todo => todo.id !== id);
                this.setState({ todos });
            })
            .catch(this.handleError);
    };

    hadnleAdd = title => {
        axios
            .post('/api/todos', { title })
            .then(response => {
                let todo = response.data;
                let todos = [...this.state.todos, todo];
                this.setState({ todos });
            })
            .catch(this.handleError);
    };

    handleEdit = (id, title) => {
        axios
            .put(`/api/todos/${id}`, { title })
            .then(response => {
                console.log('response', response)
                let todos = this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.title = response.data.title;
                    }
                    return todo;
                });
                this.setState({ todos });
            })
            .catch(this.handleError);
    };

    handleError = error => {
        console.error(error.message);
    };

    render() {
        return (
            <main className="App todo">
                <Header title={this.props.title} todos={this.state.todos} />
                <Stats todos={this.state.todos} />
                <section className="todo__list">
                    {this.state.todos.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onChange={this.handleToggle}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />
                    ))}
                </section>
                <Form onAdd={this.hadnleAdd} />
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired
};
