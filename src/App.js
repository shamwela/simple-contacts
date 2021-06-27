import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CreateContactButton from './components/createContactButton';
import CreateContactForm from './components/createContactForm';
import ContactDetails from './components/contactDetails';
import Contacts from './components/contacts';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      {
        id: uuidv4(),
        name: 'Alex',
        emails: ['alex@gmail.com'],
        phones: ['123'],
      },
      {
        id: uuidv4(),
        name: 'Bob',
        emails: ['bob@gmail.com'],
        phones: ['123'],
      },
      {
        id: uuidv4(),
        name: 'Empty Contact',
        emails: [''],
        phones: [''],
      },
    ],
    openedContact: {},
    isCreateContactFormOpened: false,
    isContactDetailsOpened: false,
  };

  handleSaveContact = (contact) => {
    let contacts = [...this.state.contacts];

    // delete the old contact if it already exists
    contacts = contacts.filter((item) => item.id !== contact.id);

    // add the new contact to the contacts
    contacts.push(contact);

    this.setState({ contacts, isCreateContactFormOpened: false });

    this.handleOpenContactDetails(contact);
  };

  handleContactFormClose = () => {
    this.setState({ isCreateContactFormOpened: false });
  };

  handleOpenContactDetails = (contact) => {
    this.setState({ openedContact: contact, isContactDetailsOpened: true });
  };

  handleDeleteContact = (contact) => {
    let contacts = [...this.state.contacts];
    contacts = contacts.filter((item) => item.id !== contact.id);
    this.setState({ contacts, isContactDetailsOpened: false });
  };

  render() {
    const {
      contacts,
      isCreateContactFormOpened,
      isContactDetailsOpened,
      openedContact,
    } = this.state;

    return (
      <div id="app">
        <h1 id="app-title">Simple Contacts</h1>

        <CreateContactButton
          onCreateContact={() =>
            this.setState({ isCreateContactFormOpened: true })
          }
        />
        {isCreateContactFormOpened && (
          <CreateContactForm
            onSaveContact={(contact) => this.handleSaveContact(contact)}
            onContactFormClose={this.handleContactFormClose}
          />
        )}

        <Contacts
          contacts={contacts}
          onOpen={(contact) => this.handleOpenContactDetails(contact)}
        />

        {isContactDetailsOpened && (
          <ContactDetails
            contact={openedContact}
            onDeleteContact={this.handleDeleteContact}
            onContactDetailsClose={() =>
              this.setState({ isContactDetailsOpened: false })
            }
            onSaveContact={(contact) => this.handleSaveContact(contact)}
            onContactFormClose={this.handleContactFormClose}
          />
        )}
      </div>
    );
  }
}

export default App;
