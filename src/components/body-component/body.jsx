import React from 'react';
import './body.css';
import BodyTitle from '../bodyTitle-component/bodyTitle';
import NotesFooter from '../notesFooter-component/notesFooter';
import Note from '../note-component/note';

const charLimit = 10;
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

    if (this.note.length > charLimit) {
      this.note = this.note.slice(0, charLimit);
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
        <Note note={this.note} limit={this.state.limit} onChange={text => this.onTextChange(text)} />
        <NotesFooter limit={charLimit - this.state.characters} />
      </div>
    );
  }
}

export default Body;
