import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Joi from 'joi';
import Form from './common/form';

class ContactForm extends Form {
  state = {
    data: {
      id: uuidv4(),
      name: '',
      emails: [''],
      phones: [''],
    },
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
        <form onSubmit={this.handleSubmit}>
          <h1>Create new data</h1>
          {this.renderSingleInput('name', 'Name (Required)')}
          {this.renderMultipleInput('emails', 'Emails', 'email')}
          {this.renderMultipleInput('phones', 'Phones', 'tel')}
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            onClick={this.props.onContactFormClose}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
