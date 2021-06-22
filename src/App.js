import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import CreateContactButton from './components/createContactButton';
import ContactForm from './components/contactForm';
import Contacts from './components/contacts';

class App extends Component {
  state = {
    contacts: [
      {
        name: 'Aung',
        emails: ['aung@email.com'],
        phones: ['+959111'],
      },
    ],
    isContactFormOpened: false,
  };

  toggleContactForm = () => {
    const isContactFormOpened = !this.state.isContactFormOpened;
    this.setState({ isContactFormOpened });
  };

  handleSaveContact = (contact) => {
    const contacts = [...this.state.contacts];
    contacts.push(contact);
    this.setState({ contacts });
  };

  render() {
    const { isContactFormOpened } = this.state;
    return (
      <div id="app">
        <Link to="/">
          <h1>Simple Contacts</h1>
        </Link>
        <CreateContactButton onCreateContact={this.toggleContactForm} />
        {isContactFormOpened && (
          <ContactForm
            onSaveContact={this.handleSaveContact}
            onContactFormClose={this.toggleContactForm}
          />
        )}
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
