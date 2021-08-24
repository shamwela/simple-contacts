import React from 'react'
import PropTypes from 'prop-types'
import './contacts.css'

export default function Contacts({ contacts, onOpen }) {
  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={index} onClick={() => onOpen(contact)} className='contact'>
          {contact.name}
        </div>
      ))}
    </div>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
}
