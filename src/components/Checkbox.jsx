import React from 'react'
import PropTypes from 'prop-types'

export default function Checkbox(props) {
    return (
        <button className={props.className} onClick={props.onChange}>
            <i className="material-icons">
                {props.checked ? 'check_box' : 'check_box_outline_blank'}
            </i>
        </button>
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};