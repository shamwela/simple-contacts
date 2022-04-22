import React from 'react'
import PropTypes from 'prop-types'
import './contacts.css'

export default function Contacts({ contacts, onOpen }) {
  return (
    <>
      {contacts.map((contact) => (
        <div
          onClick={() => onOpen(contact)}
          key={contact.id}
          className='contact'
        >
          {contact.name}
        </div>
      ))}
    </>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
}
