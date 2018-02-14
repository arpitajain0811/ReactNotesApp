import React from 'react';
import Header from './header';
import './board.css';
import Footer from './footer';
import Body from './body';

const board = () => (
  <div className="board">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default board;
