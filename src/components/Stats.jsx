import React from 'react';
import PropTypes from 'prop-types';

export default function Stats(props) {
    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.completed).length;
    let remaining = total - completed;
    return (
        <div className="todo__stats">
            <div className="stats__item stats-total">
                <span className="stats__heading">Всего задач</span>
                <em className="stats__value">{total}</em>
            </div>
            <div className="stats__item stats-completed">
                <span className="stats__heading">Выполнено</span>
                <em className="stats__value">{completed}</em>
            </div>
            <div className="stats__item stats-remaining">
                <span className="stats__heading">Осталось</span>
                <em className="stats__value">{remaining}</em>
            </div>
        </div>
    );
}

Stats.propTypes = {
    todos: PropTypes.array.isRequired
};
