import React from 'react';
import './event-payment.css';
import { CardForm } from '../../components/card-form/card-from';

class EventPayment extends React.Component {
  render() {
    return (
      <div className="payment-host">
        <div className="room-info">
          <p className="room-type">
            Room Type: Concert Hall
          </p>
          <p className="room-price">
            Price: 200 Baht
          </p>
        </div>
        <div className="convention-info">
          <p className="convention-title">
            Title: The Tales of Bluecollar Spotty Baboon
          </p>
          <p className="convention-room">
            Room: Concert Hall 1
          </p>
          <p className="convention-date">
            Date: 2018-01-12
          </p>
          <p className="convention-time">
            Time: 02:02:05 - 02:46:21
          </p>
        </div>
        <CardForm/>
      </div>
    );
  }
}

export { EventPayment }