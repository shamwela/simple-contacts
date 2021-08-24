import React from 'react'
import Form from './common/form'
import firebase from 'firebase/app'

export default class EditContactForm extends Form {
  state = {
    data: this.props.contact,
    errors: {},
  }

  handleEdit = (event) => {
    event.preventDefault()
    const errors = this.validateForm()
    this.setState({ errors: errors || {} })
    if (errors) return

    const userID = firebase.auth().currentUser.uid
    const { id: contactID, name, emails, phones } = this.state.data

    firebase
      .firestore()
      .collection(userID)
      .doc(contactID)
      .update({
        name,
        emails,
        phones,
      })
      .catch((error) => console.log(error))

    this.props.onContactFormClose(event.preventDefault())
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit} className='popup'>
          <h1>Edit contact</h1>
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
