import React, { Component } from 'react';
import './App.css';
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
  };

  render() {
    return (
      <div id="app">
        
        <h1>Simple Contacts</h1>
        <ContactForm />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
