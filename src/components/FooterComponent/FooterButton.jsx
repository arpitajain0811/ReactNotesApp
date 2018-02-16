import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = props => (
  <button
    className="Footer"
    onClick={() => props.onClick()}
  >
    {props.text}
  </button>
);

export default Footer;
Footer.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
