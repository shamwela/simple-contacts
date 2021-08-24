import React, { Component } from 'react'
import EditContactForm from './editContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ContactDetails extends Component {
  state = {
    contact: this.props.contact,
    isEditContactFormOpened: false,
  }

  hasContactDetails = ({ emails, phones }) => {
    const emailsHasValue = emails.some((email) => email !== '')
    const phonesHasValue = phones.every((phone) => phone !== '')
    return emailsHasValue || phonesHasValue
  }

  handleEditContactFormClose = () => {
    this.setState({ isEditContactFormOpened: false })
  }

  handleContactFormClose = () => {
    this.handleEditContactFormClose()
    this.props.onContactFormClose()
  }

  render() {
    const { onDeleteContact, onContactDetailsClose } = this.props
    const { contact, isEditContactFormOpened } = this.state
    const { name, emails, phones } = contact

    return (
      <>
        <div className='popup'>
          <h1>
            <FontAwesomeIcon icon='user' /> {name}
          </h1>

          {!this.hasContactDetails(contact) && (
            <>
              <h2>No contact info</h2>
              <p>Edit this contact to add contact details</p>
            </>
          )}

          {this.hasContactDetails(contact) && (
            <>
              <h2>Contact details</h2>
              <h3>
                <FontAwesomeIcon icon='envelope' /> Email
              </h3>
              {emails.map((email, index) => (
                <a
                  key={index}
                  href={`mailto:${email}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  {email}
                </a>
              ))}

              <h3>
                <FontAwesomeIcon icon='phone' /> Phone
              </h3>
              {phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  {phone}
                </a>
              ))}
            </>
          )}

          <button
            onClick={() => this.setState({ isEditContactFormOpened: true })}
            className='btn btn-primary'
          >
            <FontAwesomeIcon icon='edit' /> Edit
          </button>

          <button
            onClick={() => onDeleteContact(contact)}
            className='btn btn-danger'
          >
            <FontAwesomeIcon icon='trash' /> Delete
          </button>

          <button onClick={onContactDetailsClose} className='btn btn-secondary'>
            <FontAwesomeIcon icon='window-close' /> Close
          </button>
        </div>

        {isEditContactFormOpened && (
          <EditContactForm
            contact={contact}
            onContactFormClose={this.handleContactFormClose}
          />
        )}
      </>
    )
  }
}

export default ContactDetails
