import React from 'react';
import './note.css';

const Note = () => (
  <div className="note">
    <div className="heading-box">
      <input type="text" placeholder="Tasks for today" />
    </div>
    <div className="note-instruction-container">
      <span className="note-instruction">Please type your note below</span>
      <i className="fa fa-file-text-o" aria-hidden="true" />
    </div>
    <div className="Note-area">
      <textarea />
    </div>
  </div>
);

export default Note;
