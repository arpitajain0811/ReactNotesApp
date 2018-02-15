import React from 'react';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import Body from '../BodyComponent/Body';
import './App.css';

const charLimit = 120;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      limit: false,
      characters: 0,
      noteTitle: '',
      noteBody: '',
      savedNotes: [],
    };
  }
  onTextChange(text) {
    this.note = text.target.value;

    if (this.note.length > charLimit) {
      this.note = this.note.slice(0, charLimit);
      this.setState({
        limit: true,
        characters: 10,
        noteBody: this.note,
      });
    } else {
      this.setState({
        limit: false,
        characters: this.note.length,
        noteBody: this.note,
      });
    }
  }
  onTitleChange(title) {
    this.title = title.target.value;
    this.setState({
      noteTitle: this.title,
    });
  }
  saveNote(noteTitle, noteBody) {
    const note = { title: noteTitle, body: noteBody };
    const prevNotes = this.state.savedNotes.slice();
    prevNotes.push(note);
    this.setState({
      savedNotes: prevNotes,
    });
    this.title = '';
    this.note = '';
    this.changeState();
  }
  changeState() {
    this.setState({
      page: !this.state.page,
    });
  }
  render() {
    if (this.state.page === 0) {
      return (

        <div className="Board">
          <Header text="Start taking notes" />
          <Body
            title={this.title}
            note={this.note}
            limit={this.state.limit}
            onTextChange={text => this.onTextChange(text)}
            onTitleChange={text => this.onTitleChange(text)}
            saveNote={this.saveNote.bind(this)}
            charLimit={charLimit}
            characters={this.state.characters}
            noteTitle={this.state.noteTitle}
            noteBody={this.state.noteBody}
          />
          <Footer text="About Us" />
        </div>
      );
    }
    return (
      <div className="Board">
        <Header text="Start taking notes" />
        <Footer text="About Us" />
      </div>
    );
  }
}
export default App;
