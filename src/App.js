import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {EventCategory} from './components/event-category/event-category.js';
import { Home } from './pages/home/home.js';
import { BuySeat } from './pages/buy-seat/buy-seat';
import { Login } from './pages/login/login.js';

class App extends Component {
  render() {
    return (
      // <Home/>
      // <BuySeat/>
      <Login/>
    );
  }
}

export default App;
