import React from 'react';
import Error from './error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MultipleInput = ({
  arrayData,
  name,
  label,
  type,
  error,
  onChange,
  onInputDelete,
  onAddNewInput,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {name === 'emails' && <FontAwesomeIcon icon="envelope" />}
        {name === 'phones' && <FontAwesomeIcon icon="phone" />}
        &nbsp;
        {label}
      </label>
      {arrayData.map((value, index) => (
        <div key={index}>
          <div className="mb-2 d-flex justify-content-between">
            <input
              value={value}
              onChange={(e) => onChange(e, index)}
              name={name}
              id={name}
              type={type}
              className="form-control"
            />
            <button
              onClick={(e) => onInputDelete(e, index)}
              name={name}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon="trash" />
            </button>
          </div>
          {error && <Error error={error} />}
        </div>
      ))}
      <button
        onClick={onAddNewInput}
        name={name}
        className="d-block btn btn-primary"
      >
        <FontAwesomeIcon icon="plus" /> Add {name}
      </button>
    </div>
  );
};

export default MultipleInput;
