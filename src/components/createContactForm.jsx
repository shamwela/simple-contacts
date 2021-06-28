import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './common/form';

class CreateContactForm extends Form {
  state = {
    data: {
      id: uuidv4(),
      name: '',
      emails: [''],
      phones: [''],
    },
    errors: {},
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="popup">
          <h1>Create new contact</h1>
          {this.renderSingleInput('name', 'Name (Required)')}
          {this.renderMultipleInput('emails', 'Emails', 'email')}
          {this.renderMultipleInput('phones', 'Phones', 'tel')}
          {this.renderSubmitButton()}
          {this.renderCancelButton()}
        </form>
      </div>
    );
  }
}

export default CreateContactForm;
