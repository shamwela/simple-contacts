import React from 'react';

const Contacts = ({ contacts, onOpen }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id} onClick={() => onOpen(contact)}>
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
