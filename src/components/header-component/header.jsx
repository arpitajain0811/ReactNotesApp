import React from 'react';
import './header.css';

const header = props => (
  <div className="header">
    <b>{props.text}</b>
  </div>
);

export default header;
