import React, { Component } from 'react';
import './contactForm.css';

class ContactForm extends Component {
  render() {
    const { onContactFormClose } = this.props;

    return (
      <div id="contact-form">
        <form>
          <fieldset>
            <legend>Create new contact</legend>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Phone"
              />
            </div>
            <button className="btn btn-danger" onClick={onContactFormClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ContactForm;
