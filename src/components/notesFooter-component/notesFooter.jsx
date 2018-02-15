import React from 'react';
import PropTypes from 'prop-types';
import './notesFooter.css';

function NotesFooter(props) {
  return (
    <div className="noteFooter">
      <button className="save"><b>Save</b></button>
      <span className="characters">{props.number} characters</span>
    </div>
  );
}
export default NotesFooter;
NotesFooter.propTypes = {
  number: PropTypes.number.isRequired,
};
