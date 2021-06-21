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
        email: 'aung@email.com',
        phone: '+959111',
      },
      {
        name: 'Bo',
        email: 'bo@email.com',
        phone: '+959222',
      },
      {
        name: 'Chaw',
        email: 'chaw@email.com',
        phone: '+959333',
      },
    ],
    isCreateContactOpen: false,
  };

  toggleCreateContact = () => {
    const isCreateContactOpen = !this.state.isCreateContactOpen;
    this.setState({ isCreateContactOpen });
  };

  render() {
    const { isCreateContactOpen } = this.state;
    return (
      <div id="app">
        <Link to="/">
          <h1>Simple Contacts</h1>
        </Link>
        <CreateContactButton onCreateContact={this.toggleCreateContact} />
        {isCreateContactOpen && (
          <ContactForm handleClose={this.toggleCreateContact} />
        )}
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
