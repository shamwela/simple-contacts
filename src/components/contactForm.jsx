import React, { Component } from 'react';
import './contactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

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
                name="name"
                id="name"
                className="form-control"
                placeholder="Name"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
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
              <label for="phone" className="form-label">
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
