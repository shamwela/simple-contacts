import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './error.css';

const Error = ({ error }) => {
  return (
    <div className="alert alert-danger">
      <FontAwesomeIcon icon="exclamation-triangle" className="error-icon" />
      &nbsp;
      {error}
    </div>
  );
};

export default Error;
