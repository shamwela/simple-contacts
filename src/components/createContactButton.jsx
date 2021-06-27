import React, { Component } from 'react';
import './createContactButton.css';

class CreateContactButton extends Component {
  render() {
    return (
      <button
        id="create-contact-button"
        className="btn btn-primary"
        onClick={this.props.onCreateContact}
      >
        + Create contact
      </button>
    );
  }
}

export default CreateContactButton;
