import React, { Component } from 'react';

class ContactDetails extends Component {
  hasValues = (obj) => {
    let hasValues = true;
    for (const key in obj) {
      const value = obj[key];
      if (value[0] === '') {
        hasValues = false;
        break;
      }
    }
    return hasValues;
  };

  render() {
    const { contact, onClose } = this.props;
    const { name, emails, phones } = contact;

    return (
      <div className="popup d-flex flex-column">
        <h1>{name}</h1>

        {!this.hasValues(contact) && (
          <>
            <h2>No contact info</h2>
            <p>Edit this contact to add contact details</p>
          </>
        )}

        {this.hasValues(contact) && (
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

        {/* <button onClick={this.} className="btn-btn-primary">Edit</button> */}

        <button onClick={onClose} className="btn btn-secondary">
          Close
        </button>
      </div>
    );
  }
}

export default ContactDetails;
