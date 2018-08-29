import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
  return (
    <div className="contact">
      <img  className="contact-photo" role="presentation" src={props.photo} />
      <span className="contact-name">{props.name}</span>
      <span className="contact-address">{props.address}</span>
    </div>
  )
}