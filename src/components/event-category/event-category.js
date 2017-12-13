import React from 'react';
import EventBox from '../event-box/event-box.js';
import './event-category.css';

export function EventCategory(props) {
  let today = [];
  today = props.data.today.map((data, i) => {
    console.log(data, i);
    return <EventBox event={data} isLast={(i + 1) == props.data.today.length} key={'today' + i} />
  });
  let yesterday = [];
  yesterday = props.data.yesterday.map((data, i) => {
    console.log('yesterday', data, i);
    return <EventBox event={data} isLast={(i + 1) == props.data.yesterday.length} key={'ytday' + i}/>
  });
  return (
    <div className="event-category-host">
      <h2> {props.data.title} </h2>
      <div className="event-category-content">
        <div className="event-category-day">
          <h3>Today</h3>
          {today}
        </div>
        <div className="event-category-day">
          <h3>YesterDay</h3>
          {yesterday}
        </div>
      </div>
    </div>
  );
}
  