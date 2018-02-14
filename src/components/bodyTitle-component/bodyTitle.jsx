import React from 'react';
import './bodyTitle.css';

const BodyTitle = props => (
  <div className="noteTitle" >
    <span><b>{props.text}</b></span>
    <button><b>en</b></button>
  </div>
);

export default BodyTitle;

