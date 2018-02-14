import React from 'react';
import './body.css';

const body = () => (
  <div className="Body">
    <div className="Note-title" >
      <span>Note Title</span>
      <button>en</button>
    </div>
    <div className="heading-box">
      <input type="text" placeholder="Tasks for today" />
    </div>

  </div>
);

export default body;
