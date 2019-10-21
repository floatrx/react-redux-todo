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
            .then(reponse => {
                let todos = reponse.data;
                this.setState({ todos });
            })
            .catch(this.handleError);
    };

    handleStatusChange = target => {
        let todos = this.state.todos.map(todo => {
            if (target.id === todo.id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos });
    };

    handleDelete = target => {
        let todos = this.state.todos.filter(todo => todo.id !== target.id);
        this.setState({ todos });
    };

    hadnleAdd = title => {
        axios
            .post('/api/todos', { title })
            .then(reponse => {
                let todo = reponse.data;
                let todos = [...this.state.todos, todo];
                this.setState({ todos });
            })
            .catch(this.handleError);
    };

    handleEdit = (idTarget, title) => {
        let todos = this.state.todos.map(todo => {
            if (idTarget === todo.id) {
                todo.title = title;
            }
            return todo;
        });

        this.setState({ todos });
    };

    handleError = error => {
        console.error(error.message);
    };

    render() {
        return (
            <main className="App todo">
                <Header title={this.props.title} todos={this.state.todos} />
                <section className="todo__list">
                    {this.state.todos.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onChange={this.handleStatusChange}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />
                    ))}
                </section>
                <Form onAdd={this.hadnleAdd} />
                <Stats todos={this.state.todos} />
            </main>
        );
    }
}

App.propTypes = {
    initialData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired
};
