import React from 'react';
import PropTypes from 'prop-types';
import './Body.css';
import BodyTitle from '../BodyTitleComponent/BodyTitle';
import NotesFooter from '../NotesFooterComponent/NotesFooter';
import Note from '../NoteComponent/Note';

const Body = props => (
  <div className="Body">
    <BodyTitle text="Note Title" />
    <Note
      title={props.title}
      note={props.note}
      // clear={props.clear}
      limit={props.limit}
      onChange={text => props.onTextChange(text)}
      onTitleChange={text => props.onTitleChange(text)}
    />
    <NotesFooter
      onClick={() => { props.saveNote(props.noteTitle, props.noteBody); }}
      limit={props.charLimit - props.characters}
    />
  </div>
);

export default Body;

Body.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  limit: PropTypes.bool.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  saveNote: PropTypes.func.isRequired,
  noteTitle: PropTypes.string.isRequired,
  noteBody: PropTypes.string.isRequired,
  charLimit: PropTypes.number.isRequired,
  characters: PropTypes.number.isRequired,
};
