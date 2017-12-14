import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {EventCategory} from './components/event-category/event-category.js';
import { Home } from './pages/home/home.js';
import { BuySeat } from './pages/buy-seat/buy-seat';
import { Login } from './pages/login/login.js';
import { TicketPayment } from './pages/ticket-payment/ticket-payment';
import { EventPayment } from './pages/event-payment/event-payment';
import { AddEvent } from './pages/add-event/add-event';

class App extends Component {
  render() {
    return (
      // <Home/>
      // <BuySeat/>
      <Login/>
      // <TicketPayment/>
    // <EventPayment/>
    // <AddEvent/>
  );
  }
}

export default App;
