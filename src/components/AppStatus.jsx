import React from 'react';
import { PropTypes } from 'prop-types';

export function AppStatus({ status }) {
  const { isPending, message } = status;
  if (isPending || message) {
    return (
      <div className="Status">
        {isPending ? <span className="Status__spinner"></span> : null}
        <span className="Status__text">{message}</span>
      </div>
    );
  } else return null;
}

AppStatus.propTypes = {
  status: PropTypes.shape({
    isPending: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};
