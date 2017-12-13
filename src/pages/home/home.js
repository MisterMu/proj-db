import React from 'react';
import { EventCategory } from '../../components/event-category/event-category';
import './home.css'

const mock_data = [{
  title: 'Plays',
  today: [
    {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }
  ],
  yesterday: [
    {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }
  ]
}, {
  title: 'Concerts',
  today: [
    {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }
  ],
  yesterday: [
    {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }, {
      name: 'event-name',
      time: 'dd-mm-yyyy',
      hall: 'A2'
    }
  ]
}]

export class Home extends React.Component {
  render() {
    let category = [];
    this.category = mock_data.map((data, i) => {
      return <EventCategory data={data} key={i}/>
    });
    return (
      <div className="home-host">
        {this.category}
      </div>
    );
  }
}