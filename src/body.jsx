import React from 'react';
import './body.css';
import BodyTitle from './bodyTitle';
import NotesFooter from './notesFooter';

const body = () => (
  <div className="Body">
    <BodyTitle />
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
    <NotesFooter />
  </div>
);

export default body;
