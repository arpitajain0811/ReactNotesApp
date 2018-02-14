import React from 'react';
import Header from '../header-component/header';
import Footer from '../footer-component/footer';
import Body from '../body-component/body';
import './app.css';

const board = () => (
  <div className="board">
    <Header text="Tasks for today" />
    <Body />
    <Footer text="About Us" />
  </div>
);

export default board;
