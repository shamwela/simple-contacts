import React from 'react';

const MultipleInput = ({
  nestedData,
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
      {nestedData.map((value, index) => (
        <div key={index}>
          <div className="d-flex">
            <input
              value={value}
              onChange={(e) => onChange(e, index)}
              name={name}
              id={name}
              type={type}
              className="form-control mb-2"
            />
            <button
              onClick={(e) => onInputDelete(e, index)}
              name={name}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
          {error && <div className="d-block alert alert-danger">{error}</div>}
        </div>
      ))}
      <button onClick={onAddNewInput} name={name} className="btn btn-primary">
        + Add email
      </button>
    </div>
  );
};

export default MultipleInput;
