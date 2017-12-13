import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {EventCategory} from './components/event-category/event-category.js';
import { Home } from './pages/home/home.js';
import { BuySeat } from './pages/buy-seat/buy-seat';

class App extends Component {
  render() {
    return (
      // <Home/>
      <BuySeat/>
    );
  }
}

export default App;
