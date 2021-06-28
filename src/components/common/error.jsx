import React from 'react';

const Error = ({ error }) => {
  return (
    <div className="alert alert-danger">
      <i className="fa fa-exclamation-triangle text-danger" />
      &nbsp;
      {error}
    </div>
  );
};

export default Error;
