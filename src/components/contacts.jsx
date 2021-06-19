import React from 'react';

const Contacts = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div>{contact.name}</div>
      ))}
    </div>
  );
};

export default Contacts;
