import React from 'react';
import PropTypes from 'prop-types';
import './header.css';


const header = props => (
  <div className="header">
    <b>{props.text}</b>
  </div>
);

export default header;

header.propTypes = {
  text: PropTypes.string.isRequired,
};

