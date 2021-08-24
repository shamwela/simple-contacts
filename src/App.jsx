import React, { Component } from 'react'
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
import SignInPage from './components/SignInPage'
import styled from 'styled-components'
import './App.css'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class App extends Component {
  state = {
    contacts: [],
    search: '',
    openedContact: {},
    isCreateContactFormOpened: false,
    isContactDetailsOpened: false,
  }

  componentDidUpdate() {
    const user = firebase.auth().currentUser

    // If the presence of the user is not checked, the app will crash
    if (user) {
      firebase
        .firestore()
        .collection(user.uid)
        .onSnapshot(
          (querySnapshot) => {
            const contacts = []

            querySnapshot.forEach((document) => {
              const { id } = document
              const contact = { id, ...document.data() }
              contacts.push(contact)
            })

            this.setState({ contacts })
          },
          (error) => console.log(error)
        )
    }
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
            <Header>
              <h1 id='app-title'>Contacts</h1>
              <button onClick={signOut} className='btn btn-outline-light'>
                Sign out
              </button>
            </Header>

            <Search search={search} onSearch={this.handleSearch} />

            <CreateContactButton
              onCreateContact={() =>
                this.setState({ isCreateContactFormOpened: true })
              }
            />
            {isCreateContactFormOpened && (
              <CreateContactForm
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
                onContactFormClose={this.handleContactFormClose}
              />
            )}
          </div>
        ) : (
          <SignInPage signInWithGoogle={signInWithGoogle} />
        )}
      </>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App)
