import React, { Component } from 'react';
import EditContactForm from './editContactForm';

class ContactDetails extends Component {
  state = {
    contact: this.props.contact,
    isEditContactFormOpened: false,
  };

  hasContactDetails = ({ emails, phones }) => {
    const emailsHasValue = emails.some((email) => email !== '');
    const phonesHasValue = phones.every((phone) => phone !== '');
    return emailsHasValue || phonesHasValue;
  };

  handleEditContactFormClose = () => {
    this.setState({ isEditContactFormOpened: false });
  };

  handleSaveContact = (contact) => {
    this.handleEditContactFormClose();
    this.setState({ contact: contact });
    this.props.onSaveContact(contact);
  };

  handleContactFormClose = () => {
    this.handleEditContactFormClose();
    this.props.onContactFormClose();
  };

  render() {
    const { onDeleteContact, onContactDetailsClose } = this.props;
    const { contact, isEditContactFormOpened } = this.state;
    const { name, emails, phones } = contact;

    return (
      <>
        <div className="popup">
          <h1>{name}</h1>

          {!this.hasContactDetails(contact) && (
            <>
              <h2>No contact info</h2>
              <p>Edit this contact to add contact details</p>
            </>
          )}

          {this.hasContactDetails(contact) && (
            <>
              <h2>Contact details</h2>
              {emails.map((email, index) => (
                <a
                  key={index}
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {email}
                </a>
              ))}
              {phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {phone}
                </a>
              ))}
            </>
          )}

          <button
            onClick={() => this.setState({ isEditContactFormOpened: true })}
            className="btn btn-primary"
          >
            <i className="fa fa-edit" /> Edit
          </button>

          <button
            onClick={() => onDeleteContact(contact)}
            className="btn btn-danger"
          >
            <i className="fa fa-trash" /> Delete
          </button>

          <button onClick={onContactDetailsClose} className="btn btn-secondary">
            <i className="fa fa-window-close" /> Close
          </button>
        </div>

        {isEditContactFormOpened && (
          <EditContactForm
            contact={contact}
            onSaveContact={this.handleSaveContact}
            onContactFormClose={this.handleContactFormClose}
          />
        )}
      </>
    );
  }
}

export default ContactDetails;
