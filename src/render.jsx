import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
// import registerServiceWorker from './registerServiceWorker';
const render = () => { ReactDOM.render(<Board />, document.getElementById('root')); };
export default render;
// registerServiceWorker();