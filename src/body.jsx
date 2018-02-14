import React from 'react';
import './body.css';

const body = () => (
  <div className="Body">
    <div className="Note-title" >
      <span><b>Note Title</b></span>
      <button>en</button>
    </div>
    <div className="heading-box">
      <input type="text" placeholder="Tasks for today" />
    </div>
    <div className="note">
    Please type your note below
    </div>
  </div>
);

export default body;
