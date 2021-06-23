import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './contactForm.css';

class ContactForm extends Component {
  state = {
    contact: {
      id: uuidv4(),
      name: '',
      emails: [''],
      phones: [''],
    },
  };

  handleSaveContact = (event) => {
    event.preventDefault();
    let contact = { ...this.state.contact };
    console.log('contact', contact);

    const { name, value } = event.target;

    if (name === 'name') {
      contact.name = event.target.value;
    } else {
      console.log('contact[name]', contact[name]);
      const lastItem = contact[name].length - 1;
      contact[name][lastItem] = value;
    }
    console.log('contact', contact);

    this.setState({ contact });
    this.props.onSaveContact(this.state.contact);
    this.setState({ contact: { name: '', emails: [''], phones: [''] } }); // reset the state
  };

  render() {
    const { emails, phones } = this.state.contact;
    const { onContactFormClose } = this.props;

    return (
      <div id="contact-form">
        <form onSubmit={this.handleSaveContact}>
          <fieldset>
            <legend>Create new contact</legend>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              {emails.map((email) => (
                <input
                  key={email}
                  type="email"
                  name="emails"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                />
              ))}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                name="phones"
                id="phone"
                className="form-control"
                placeholder="Phone"
              />
            </div>
            <input
              type="submit"
              value="Save"
              className="btn btn-primary"
              onClick={this.handleSaveContact}
            />
            <button className="btn btn-danger" onClick={onContactFormClose}>
              Cancel
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ContactForm;
