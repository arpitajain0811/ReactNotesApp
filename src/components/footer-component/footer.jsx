import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

const footer = props => (
  <div className="footer">
    <b>{props.text}</b>
  </div>
);

export default footer;
footer.propTypes = {
  text: PropTypes.string.isRequired,
};
