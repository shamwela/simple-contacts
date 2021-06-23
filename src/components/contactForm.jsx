import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Joi from 'joi';
import Form from './common/form';
import './contactForm.css';

class ContactForm extends Form {
  state = {
    data: {
      id: uuidv4(),
      name: '',
      email: '',
      phone: '',
    },
    errors: {},
  };

  schema = Joi.object({
    name: Joi.string().max(30).required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    phone: Joi.string().max(15),
  });

  doSubmit = () => {
    // Will call the server here
    console.log('Submitted');
  };

  render() {
    return (
      <div id="contact-form">
        <form onSubmit={this.handleSubmit}>
          <h1>Create new contact</h1>
          {this.renderInput('name', 'Name')}
          {this.renderInput('email', 'Email')}
          {this.renderInput('phone', 'Phone')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default ContactForm;
