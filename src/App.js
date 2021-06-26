import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CreateContactButton from './components/createContactButton';
import CreateContactForm from './components/createContactForm';
import Contacts from './components/contacts';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      {
        id: uuidv4(),
        name: 'Aung',
        emails: ['aung@email.com'],
        phones: ['+959111'],
      },
    ],
    isCreateContactFormOpened: false,
  };

  toggleCreateContactForm = (e) => {
    e.preventDefault();
    const isCreateContactFormOpened = !this.state.isCreateContactFormOpened;
    this.setState({ isCreateContactFormOpened });
  };

  handleSaveContact = (contact) => {
    const contacts = [...this.state.contacts];
    contacts.push(contact);
    this.toggleCreateContactForm();
    this.setState({ contacts });
  };

  render() {
    const { isCreateContactFormOpened: isContactFormOpened } = this.state;
    return (
      <div id="app">
        <Link to="/">
          <h1>Simple Contacts</h1>
        </Link>
        <CreateContactButton onCreateContact={this.toggleCreateContactForm} />
        {isContactFormOpened && (
          <CreateContactForm
            onSaveContact={(contact) => this.handleSaveContact(contact)}
            onContactFormClose={this.toggleCreateContactForm}
          />
        )}
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
