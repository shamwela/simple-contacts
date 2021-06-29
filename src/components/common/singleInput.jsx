import React from 'react';
import Error from './error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleInput = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {name==='name' && <FontAwesomeIcon icon="user" />}
        &nbsp;
        {label}
      </label>
      <input {...rest} name={name} id={name} className="form-control mb-2" />
      {error && <Error error={error} />}
    </div>
  );
};

export default SingleInput;
