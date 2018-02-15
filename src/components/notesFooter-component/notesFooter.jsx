import React from 'react';
import PropTypes from 'prop-types';
import './notesFooter.css';

function NotesFooter(props) {
  return (
    <div className="noteFooter">
      <button className="save"><b>Save</b></button>
      <span className="characters">{props.limit} characters</span>
    </div>
  );
}
export default NotesFooter;
NotesFooter.propTypes = {
  limit: PropTypes.number.isRequired,
};
