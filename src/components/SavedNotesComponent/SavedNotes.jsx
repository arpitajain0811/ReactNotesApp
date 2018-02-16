import React from 'react';
import PropTypes from 'prop-types';
import './SavedNotes.css';
import NoteBox from '../NoteBoxComponent/NoteBox';

const SavedNotes = (props) => {
  const noteHolder = [];
  for (let i = 0; i < props.notesArray.length; i += 1) {
    noteHolder.push((<NoteBox
      editNote={id => props.editNote(id)}
      id={props.notesArray[i].id}
      title={props.notesArray[i].title}
      content={props.notesArray[i].body}
    />
    ));
  }

  return (
    <div className="SavedNotesBody">
      {noteHolder}
    </div>
  );
};

export default SavedNotes;
SavedNotes.propTypes = {
  notesArray: PropTypes.string.isRequired,
  editNote: PropTypes.func.isRequired,
};
