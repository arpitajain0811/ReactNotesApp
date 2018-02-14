import React from 'react';
import './body.css';
import BodyTitle from '../bodyTitle-component/bodyTitle';
import NotesFooter from '../notesFooter-component/notesFooter';
import Note from '../note-component/note';

const body = () => (
  <div className="body">
    <BodyTitle text="Note Title" />
    <Note />
    <NotesFooter number="150" />
  </div>
);

export default body;
