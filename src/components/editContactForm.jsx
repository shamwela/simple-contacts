import React from 'react';
import Joi from 'joi';
import Form from './common/form';

class EditContactForm extends Form {
  state = {
    data: this.props.contact,
    errors: {},
  };

  schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().max(70).required().label('Name'),
    emails: Joi.array().items(
      Joi.string()
        .allow(null, '')
        .email({ tlds: { allow: false } }) // allow emails with any top level domain
        .min(4)
        .max(320)
        .label('Email')
    ),
    phones: Joi.array().items(
      Joi.string().allow(null, '').max(20).label('Phone')
    ),
  });

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
