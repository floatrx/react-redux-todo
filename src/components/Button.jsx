import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} {...props}>
            {props.icon ? (
                <i className="material-icons">{props.icon}</i>
            ) : (
                props.children
            )}
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node
};
