import React from 'react';
import { PropTypes } from 'prop-types';

export function AppStatus({ status }) {
  const { isProcessing, message } = status;
  if (isProcessing || message) {
    return (
      <div className="Status">
        {isProcessing ? <span className="Status__spinner"></span> : null}
        <span className="Status__text">{message}</span>
      </div>
    );
  } else return null;
}

AppStatus.propTypes = {
  status: PropTypes.shape({
    isProcessing: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};
