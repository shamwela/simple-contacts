import React from 'react';
import './contacts.css';

const Contacts = ({ contacts, onOpen }) => {
  return (
    <div id="contacts">
      {contacts.map((contact, index) => (
        <div key={index} onClick={() => onOpen(contact)} class="contact">
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
