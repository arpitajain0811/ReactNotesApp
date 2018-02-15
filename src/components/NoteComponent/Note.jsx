import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

const Note = props => (
  <div className="Note">
    <div className="HeadingBox">
      <input
        onChange={text => props.onTitleChange(text)}
        type="text"
        placeholder="Tasks for today"
        value={props.title}
      />
    </div>
    <div className="NoteInstructionContainer">
      <span className="NoteInstruction">Please type your note below</span>
      <i className="fa fa-file-text-o" aria-hidden="true" />
    </div>
    <div className="NoteArea">
      <textarea
        value={props.note}
        className={props.limit ? 'Warning' : ''}
        onChange={(text) => { props.onChange(text); }}
      />
    </div>
  </div>
);

export default Note;
Note.propTypes = {
  note: PropTypes.string.isRequired,
  limit: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

