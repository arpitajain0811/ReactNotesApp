import React from 'react';
import './body.css';
import BodyTitle from './bodyTitle';
import NotesFooter from './notesFooter';
import Note from './note';

const body = () => (
  <div className="Body">
    <BodyTitle />
    <Note />
    <NotesFooter />
  </div>
);

export default body;
