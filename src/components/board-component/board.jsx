import React from 'react';
import Header from '../header-component/header';
import Footer from '../footer-component/footer';
import Body from '../body-component/body';
import './board.css';

const board = () => (
  <div className="board">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default board;
