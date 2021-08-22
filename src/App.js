import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
import Search from './components/common/search'
import CreateContactButton from './components/createContactButton'
import CreateContactForm from './components/createContactForm'
import ContactDetails from './components/contactDetails'
import Contacts from './components/contacts'
import './App.css'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

class App extends Component {
  state = {
    contacts: [
      {
        id: uuidv4(),
        name: 'Bob',
        emails: ['bob@gmail.com'],
        phones: ['123'],
      },
      {
        id: uuidv4(),
        name: 'Alex',
        emails: ['alex@gmail.com'],
        phones: ['123'],
      },
      {
        id: uuidv4(),
        name: 'Empty Contact',
        emails: [''],
        phones: [''],
      },
    ],
    search: '',
    openedContact: {},
    isCreateContactFormOpened: false,
    isContactDetailsOpened: false,
  }

  handleSearch = (search) => {
    this.setState({ search })
  }

  handleSaveContact = (contact) => {
    let contacts = [...this.state.contacts]

    // delete the old contact if it already exists
    contacts = contacts.filter((item) => item.id !== contact.id)

    // add the new contact to the contacts
    contacts.push(contact)

    this.setState({ contacts, isCreateContactFormOpened: false })

    this.handleOpenContactDetails(contact)
  }

  handleContactFormClose = () => {
    this.setState({ isCreateContactFormOpened: false })
  }

  handleOpenContactDetails = (contact) => {
    this.setState({ openedContact: contact, isContactDetailsOpened: true })
  }

  handleDeleteContact = (contact) => {
    let contacts = [...this.state.contacts]
    contacts = contacts.filter((item) => item.id !== contact.id)
    this.setState({ contacts, isContactDetailsOpened: false })
  }

  render() {
    const { user, signOut, signInWithGoogle } = this.props

    const {
      contacts: allContacts,
      search,
      openedContact,
      isCreateContactFormOpened,
      isContactDetailsOpened,
    } = this.state

    const sortedContacts = _.sortBy(allContacts, [
      (contact) => contact.name.toLocaleLowerCase(),
    ])

    let contacts = sortedContacts
    if (search) {
      contacts = sortedContacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      contacts = sortedContacts
    }

    return (
      <>
        {user ? (
          <div id='app'>
            <h1 id='app-title'>Simple Contacts</h1>

            <Search search={search} onSearch={this.handleSearch} />

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
        ) : (
          <>
            <button onClick={signInWithGoogle}>Continue with Google</button>
            <small>Your data won't be shared with anyone.</small>
          </>
        )}
      </>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)
