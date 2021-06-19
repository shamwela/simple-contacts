import React, { Component } from 'react';
import './contactForm.css';

class ContactForm extends Component {
  
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="submit" value="Add contact" id="contact-form-submit" />
      </form>
    );
  }
}

export default ContactForm;
