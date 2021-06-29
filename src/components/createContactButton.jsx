import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './createContactButton.css';

class CreateContactButton extends Component {
  render() {
    return (
      <button
        id="create-contact-button"
        className="btn btn-primary"
        onClick={this.props.onCreateContact}
      >
        <FontAwesomeIcon icon="plus" /> Create contact
      </button>
    );
  }
}

export default CreateContactButton;
