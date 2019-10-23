import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        let title = this.refs.title.value;
        this.props.onEdit(this.props.id, title);
        this.exitEditing();
    };
    enterEditing = () => {
        this.setState({ editing: true }, () => {
            let title = this.refs.title;
            title.select();
            title.focus();
        });
    };
    exitEditing() {
        this.setState({ editing: false });
    }
    renderDisplay() {
        return (
            <div
                className={
                    'todo__item' + (this.props.completed ? ' completed' : '')
                }
            >
                <Checkbox
                    className="todo__checkbox icon"
                    checked={this.props.completed}
                    onChange={() => this.props.onChange(this.props.id)}
                />

                <span className="todo__title">
                    <em>{this.props.title}</em>
                </span>

                <Button
                    className="todo__edit icon"
                    icon="edit"
                    onClick={this.enterEditing}
                />
                <Button
                    className="todo__delete icon"
                    icon="delete"
                    onClick={() => this.props.onDelete(this.props.id)}
                />
            </div>
        );
    }
    renderForm() {
        return (
            <form className="todo__edit-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref="title"
                    className="todo__form-name"
                    placeholder="What should be done?"
                    defaultValue={this.props.title}
                    onKeyDown={event => {
                        if (event.keyCode === 27) this.exitEditing(); // exit on Escape
                    }}
                />
                <Button
                    className="todo__form-submit"
                    type="submit"
                    icon="save"
                />
            </form>
        );
    }
    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

// PropTypes
Todo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    // Methods
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};
