import React from 'react';
import './note.css';

const Note = () => (
  <div className="note">
    <div className="headingBox">
      <input type="text" placeholder="Tasks for today" />
    </div>
    <div className="noteInstructionContainer">
      <span className="noteInstruction">Please type your note below</span>
      <i className="fa fa-file-text-o" aria-hidden="true" />
    </div>
    <div className="noteArea">
      <textarea />
    </div>
  </div>
);

export default Note;
