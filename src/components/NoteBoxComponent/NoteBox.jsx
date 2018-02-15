import React from 'react';
import PropTypes from 'prop-types';
import './NoteBox.css';

const NoteBox = props => (
  <div className="Notebox">
    <div className="NoteHeading">{props.title}</div>
    <div className="NoteContent">{props.content}</div>
  </div>
);

export default NoteBox;
NoteBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
