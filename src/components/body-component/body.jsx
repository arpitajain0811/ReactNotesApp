import React from 'react';
import './body.css';
import BodyTitle from '../bodyTitle-component/bodyTitle';
import NotesFooter from '../notesFooter-component/notesFooter';
import Note from '../note-component/note';

const body = () => (
  <div className="body">
    <BodyTitle />
    <Note />
    <NotesFooter />
  </div>
);

export default body;
