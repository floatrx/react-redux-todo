import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        let title = this.state.title;
        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    };
    handleChange = event => {
        let title = event.target.value;
        this.setState({ title });
    };
    render() {
        return (
            <form className="todo__form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref="title"
                    className="todo__form-name"
                    placeholder="What should be done?"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <Button className="todo__form-submit" type="submit">
                    Add New
                </Button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};
