import React from 'react';
import './body.css';
import BodyTitle from '../bodyTitle-component/bodyTitle';
import NotesFooter from '../notesFooter-component/notesFooter';
import Note from '../note-component/note';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: false,
      characters: 0,
    };
  }
  onTextChange(text) {
    this.note = text.target.value;

    if (this.note.length > 10) {
      this.note = this.note.slice(0, 10);
      this.setState({
        limit: true,
        characters: 10,
      });
    } else {
      this.setState({
        limit: false,
        characters: this.note.length,
      });
    }
  }
  render() {
    return (
      <div className="body">
        <BodyTitle text="Note Title" />
        <Note note={this.note} limit={this.state.limit} func={text => this.onTextChange(text)} />
        <NotesFooter number={10 - this.state.characters} />
      </div>
    );
  }
}

export default Body;
