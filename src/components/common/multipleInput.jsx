import React from 'react';
import Error from './error';

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
      <label htmlFor={name}>{label}</label>
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
              <i className="fa fa-trash" />
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
        <i className="fa fa-plus" /> Add {name}
      </button>
    </div>
  );
};

export default MultipleInput;
