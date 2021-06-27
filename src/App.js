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
        phones: ['+123'],
      },
      {
        id: uuidv4(),
        name: 'Bob',
        emails: ['bob@gmail.com'],
        phones: ['+123'],
      },
      {
        id: uuidv4(),
        name: 'Null Contact',
        emails: [''],
        phones: [''],
      },
    ],
    isCreateContactFormOpened: false,
    isContactDetailsOpened: false,
    openedContact: {},
  };

  handleSaveContact = (contact) => {
    let contacts = [...this.state.contacts];
    contacts = contacts.filter((item) => item.id !== contact.id);
    console.log('contacts', contacts);
    contacts.push(contact);
    console.log('contacts', contacts);
    this.setState({ contacts, isCreateContactFormOpened: false });
  };

  handleOpenContactDetails = (contact) => {
    this.setState({ isContactDetailsOpened: true, openedContact: contact });
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
        <Link to="/">
          <h1>Simple Contacts</h1>
        </Link>

        <CreateContactButton
          onCreateContact={() =>
            this.setState({ isCreateContactFormOpened: true })
          }
        />
        {isCreateContactFormOpened && (
          <CreateContactForm
            onSaveContact={(contact) => this.handleSaveContact(contact)}
            onContactFormClose={() =>
              this.setState({ isCreateContactFormOpened: false })
            }
          />
        )}

        <Contacts
          contacts={contacts}
          onOpen={(contact) => this.handleOpenContactDetails(contact)}
        />
        {isContactDetailsOpened && (
          <ContactDetails
            contact={openedContact}
            onContactDetailsClose={() =>
              this.setState({ isContactDetailsOpened: false })
            }
            onSaveContact={(contact) => this.handleSaveContact(contact)}
            onContactFormClose={() =>
              this.setState({ isCreateContactFormOpened: false })
            }
          />
        )}
      </div>
    );
  }
}

export default App;
