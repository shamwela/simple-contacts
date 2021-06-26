import React from 'react';
import Joi from 'joi';
import Form from './common/form';

class EditContactForm extends Form {
  state = {
    data: this.props.contact,
    errors: {},
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="popup">
          <h1>Edit contact</h1>
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

export default EditContactForm;
