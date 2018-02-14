import React from 'react';
import './note.css';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: false,
    };
  }
  onTextChange(text) {
    this.note = text.target.value;

    if (this.note.length > 120) {
      this.note = this.note.slice(0, 120);
      this.setState({
        limit: true,
      });
    } else {
      this.setState({
        limit: false,
      });
    }
  }
  render() {
    return (
      <div className="note">
        <div className="headingBox">
          <input type="text" placeholder="Tasks for today" />
        </div>
        <div className="noteInstructionContainer">
          <span className="noteInstruction">Please type your note below</span>
          <i className="fa fa-file-text-o" aria-hidden="true" />
        </div>
        <div className="noteArea">
          <textarea
            id="notes"
            value={this.note}
            className={this.state.limit ? 'warning' : ''}
            onChange={text => this.onTextChange(text)}
          />
        </div>
      </div>
    );
  }
}

export default Note;
