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
      characters: charLimit,
      noteTitle: '',
      noteBody: '',
      savedNotes: [],
      edit:false,
      id:0,
    };
  }
  onTextChange(text) {
    if (text.target.value.length > charLimit) {
      const note = text.target.value.slice(0, charLimit);
      this.setState({
        limit: true,
        characters: charLimit-note.length,
        noteBody: note,
      });
    } else {
      this.setState({
        limit: false,
        characters: charLimit-text.target.value.length,
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
    if(!this.state.edit){
    const note = {id:this.state.savedNotes.length+1, title: noteTitle, body: noteBody };
    const prevNotes = this.state.savedNotes.slice();
    prevNotes.push(note);
    this.setState({
      savedNotes: prevNotes,
      noteTitle: '',
      noteBody: '',
      characters: charLimit,
      page:true,
    });
  }
  else{
    const noteId=this.state.id;
    const savedNotesArray=this.state.savedNotes.slice();
    for(let i=0;i<savedNotesArray.length;i+=1){
      if(savedNotesArray[i].id===noteId)
      { 
        savedNotesArray[i].title=this.state.noteTitle;
        savedNotesArray[i].body=this.state.noteBody;
        this.setState({
          savedNotes:savedNotesArray.slice(),
          edit:false,
        page:true,
      });
        break;
      }
    }
  }
  }
  changeState() {
    this.setState({
      noteTitle:'',
      noteBody:'',
      characters:charLimit,
      page: false,
    });
  }
  editNote(noteId){
    const savedNotesArray=this.state.savedNotes.slice();
    for(let i=0;i<savedNotesArray.length;i+=1){
      if(savedNotesArray[i].id===noteId)
      { this.setState({
        noteTitle:savedNotesArray[i].title,
        noteBody:savedNotesArray[i].body,
        characters:charLimit-savedNotesArray[i].body.length,
        page:false,
        edit:true,
        id:noteId,
      });
        break;
      }
    }
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
        <SavedNotes editNote={(id)=>this.editNote(id)} notesArray={this.state.savedNotes} />
        <FooterButton
          text="Create new Note"
          onClick={() => { this.changeState(); }}
        />
      </div>
    );
  }
}
export default App;
