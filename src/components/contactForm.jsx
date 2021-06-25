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

  handleChange = (e, index) => {
    const contact = { ...this.state.contact };
    const { name, value } = e.target;
    // for name
    if (typeof contact[name] === 'string') {
      contact.name = value;
    } else {
      // for emails and phones
      contact[name][index] = value;
    }
    this.setState({ contact });
  };

  handleInputDelete = (e, index) => {
    e.preventDefault();
    const contact = { ...this.state.contact };
    const { name } = e.target;
    contact[name].splice(index, 1);
    this.setState({ contact });
  };

  handleAddNewInput = (e) => {
    e.preventDefault();
    const contact = { ...this.state.contact };
    const { name } = e.target;
    contact[name].push(' ');
    this.setState({ contact });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveContact(this.state.contact);
  };

  render() {
    const { name, emails, phones } = this.state.contact;

    return (
      <div id="contact-form">
        <form onSubmit={this.handleSubmit}>
          <h1>Create new contact</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={this.handleChange}
              name="name"
              id="name"
              type="text"
              className="form-control mb-2"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="emails">Email</label>
            {emails.map((email, index) => (
              <div key={index} className="d-flex">
                <input
                  value={email}
                  onChange={(e) => this.handleChange(e, index)}
                  name="emails"
                  id="emails"
                  type="email"
                  className="form-control mb-2"
                />
                <button
                  onClick={(e) => this.handleInputDelete(e, index)}
                  name="emails"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              onClick={this.handleAddNewInput}
              name="emails"
              className="btn btn-primary"
            >
              + Add email
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="phones">Phone</label>
            {phones.map((phone, index) => (
              <div key={index} className="d-flex">
                <input
                  value={phone}
                  onChange={(e) => this.handleChange(e, index)}
                  name="phones"
                  id="phones"
                  type="phone"
                  className="form-control mb-2"
                />
                <button
                  onClick={(e) => this.handleInputDelete(e, index)}
                  name="phones"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              onClick={this.handleAddNewInput}
              name="phones"
              className="btn btn-primary"
            >
              + Add phone
            </button>
          </div>
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
