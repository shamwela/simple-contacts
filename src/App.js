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
        name: 'Cat',
        emails: ['cat@gmail.com'],
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

  toggleCreateContactForm = () => {
    const isCreateContactFormOpened = !this.state.isCreateContactFormOpened;
    this.setState({ isCreateContactFormOpened });
  };

  toggleContactDetails = () => {
    const isContactDetailsOpened = !this.state.isContactDetailsOpened;
    this.setState({ isContactDetailsOpened });
  };

  handleSaveContact = (contact) => {
    const contacts = [...this.state.contacts];
    contacts.push(contact);
    this.toggleCreateContactForm();
    this.setState({ contacts });
  };

  handleOpenContactDetails = (contact) => {
    this.toggleContactDetails();
    const openedContact = contact;
    this.setState({ openedContact });
  };

  render() {
    const { isCreateContactFormOpened, isContactDetailsOpened, openedContact } =
      this.state;
    return (
      <div id="app">
        <Link to="/">
          <h1>Simple Contacts</h1>
        </Link>

        <CreateContactButton onCreateContact={this.toggleCreateContactForm} />
        {isCreateContactFormOpened && (
          <CreateContactForm
            onSaveContact={(contact) => this.handleSaveContact(contact)}
            onContactFormClose={this.toggleCreateContactForm}
          />
        )}

        <Contacts
          contacts={this.state.contacts}
          onOpen={(contact) => this.handleOpenContactDetails(contact)}
        />
        {isContactDetailsOpened && (
          <ContactDetails
            contact={openedContact}
            onClose={this.toggleContactDetails}
          />
        )}
      </div>
    );
  }
}

export default App;
