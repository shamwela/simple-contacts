import React, { Component } from 'react';

class CreateContactButton extends Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.onCreateContact}>
        + Create contact
      </button>
    );
  }
}

export default CreateContactButton;
