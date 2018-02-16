import React from 'react';
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import Body from '../BodyComponent/Body';
import FooterButton from '../FooterComponent/FooterButton';
import SavedNotes from '../SavedNotesComponent/SavedNotes';
import './App.css';

const charLimit = 120;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: false,
      limit: false,
      characters: 0,
      noteTitle: '',
      noteBody: '',
      savedNotes: [],
    };
  }
  onTextChange(text) {
    if (text.target.value.length > charLimit) {
      const note = text.target.value.slice(0, charLimit);
      this.setState({
        limit: true,
        characters: 10,
        noteBody: note,
      });
    } else {
      this.setState({
        limit: false,
        characters: text.target.length,
        noteBody: text.target.value,
      });
    }
  }
  onTitleChange(title) {
    this.setState({
      noteTitle: title.target.value,
    });
  }
  saveNote=(noteTitle, noteBody) =>{
    const note = { title: noteTitle, body: noteBody };
    const prevNotes = this.state.savedNotes.slice();
    prevNotes.push(note);
    this.setState({
      savedNotes: prevNotes,
      noteTitle: '',
      noteBody: '',
      page:true,
    });
  }
  changeState() {
    this.setState({
      page: false,
    });
  }
  render() {
    if (!this.state.page) {
      return (
        <div className="Board">
          <Header text="Start taking notes" />
          <Body
            title={this.state.noteTitle}
            note={this.state.noteBody}
            limit={this.state.limit}
            onTextChange={text => this.onTextChange(text)}
            onTitleChange={text => this.onTitleChange(text)}
            saveNote={this.saveNote}
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
        <Header text="Saved Notes" />
        <SavedNotes notesArray={this.state.savedNotes} />
        <FooterButton
          text="Create new Note"
          onClick={() => { this.changeState(); }}
        />
      </div>
    );
  }
}
export default App;
