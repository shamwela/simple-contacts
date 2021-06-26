import React from 'react';

const Contacts = ({ contacts, onOpen }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <div
          key={index}
          onClick={() => onOpen(contact)}
          style={{ cursor: 'pointer' }}
        >
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
