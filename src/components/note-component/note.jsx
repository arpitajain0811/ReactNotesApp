import React from 'react';
import PropTypes from 'prop-types';
import './note.css';

const Note = props => (
  <div className="note">
    <div className="headingBox">
      <input type="text" placeholder="Tasks for today" />
    </div>
    <div className="noteInstructionContainer">
      <span className="noteInstruction">Please type your note below</span>
      <i className="fa fa-file-text-o" aria-hidden="true" />
    </div>
    <div className="noteArea">
      <textarea
            // id="notes"
        value={props.note}
        className={props.limit ? 'warning' : ''}
        onChange={text => props.onChange(text)}
      />
    </div>
  </div>
  //   );
  // }
);

export default Note;
Note.propTypes = {
  note: PropTypes.string.isRequired,
  limit: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

