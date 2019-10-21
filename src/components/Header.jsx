import React from 'react';
import PropTypes from 'prop-types';

import logo from '../logo.svg'

function Header(props) {
    return (
        <header className="todo__heading">
            <img src={logo} width="80" alt="React logo"/>
            <h1>{props.title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired
};

export default Header;
