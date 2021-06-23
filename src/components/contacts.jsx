import React from 'react';

const Contacts = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.name}>{contact.name}</div>
      ))}
    </div>
  );
};

export default Contacts;
