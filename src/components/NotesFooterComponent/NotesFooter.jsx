import React from 'react';
import PropTypes from 'prop-types';
import './NotesFooter.css';

function NotesFooter(props) {
  return (
    <div className="NoteFooter">
      <button className="Save" onClick={() => { props.onClick(); }}><b>Save</b></button>
      <span className="Characters">{props.limit} characters</span>
    </div>
  );
}
export default NotesFooter;
NotesFooter.propTypes = {
  limit: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
