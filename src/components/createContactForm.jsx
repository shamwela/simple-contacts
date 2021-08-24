import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Form from './common/form'
import firebase from 'firebase/app'
import 'firebase/firestore'

class CreateContactForm extends Form {
  state = {
    data: {
      id: uuidv4(),
      name: '',
      emails: [''],
      phones: [''],
    },
    errors: {},
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validateForm()
    this.setState({ errors: errors || {} })
    if (errors) return

    const userID = firebase.auth().currentUser.uid
    const { id: contactID, name, emails, phones } = this.state.data

    firebase
      .firestore()
      .collection(userID)
      .doc(contactID)
      .set({
        name,
        emails,
        phones,
      })
      .catch((error) => console.log(error))

    this.props.onContactFormClose()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='popup'>
          <h1>Create new contact</h1>
          {this.renderSingleInput('name', 'Name (Required)')}
          {this.renderMultipleInput('emails', 'Emails', 'email')}
          {this.renderMultipleInput('phones', 'Phones', 'tel')}
          {this.renderSubmitButton()}
          {this.renderCancelButton()}
        </form>
      </div>
    )
  }
}

export default CreateContactForm
