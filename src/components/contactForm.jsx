import React, { Component } from 'react';
import './contactForm.css';

class ContactForm extends Component {
  state = {
    contact: { name: '', emails: [''], phones: [''] },
  };

  handleInputChange = (event) => {
    let contact = { ...this.state.contact };
    const name = event.target.name; // this name constant can be name, email, or phone
    const value = event.target.value;
    contact[name] = value;
    this.setState({ contact });
  };

  handleSaveContact = (event) => {
    event.preventDefault();
    this.props.onSaveContact(this.state.contact);
    this.setState({ contact: { name: '', email: '', phone: '' } }); // reset the state
  };

  render() {
    const { onContactFormClose } = this.props;

    return (
      <div id="contact-form" onSubmit={this.handleSaveContact}>
        <form>
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
                placeholder="Name"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone"
                onChange={this.handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onContactFormClose}
            >
              Save
            </button>
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
