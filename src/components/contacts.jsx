import React from 'react';
import './contacts.css';

const Contacts = ({ contacts, onOpen }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={index} onClick={() => onOpen(contact)} className="contact">
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
