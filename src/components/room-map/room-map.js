import React from 'react';
import './room-map.css';

export function GetRoomMap(props) {
  if (props.room_type == 1) {
    return getLectureHallMap(props.seat, props.name, props.cancel, props.proceed, props.pickSeat);
  // } else if (props.room_type == 2) {
  //   return getConferenceMap();
  // } else if (props.room_type == 3) {
  //   return getConcertHallMap();
  // } else if (props.room_type == 4) {
  //   return getAuditoriumMap();
  }
}

function getLectureHallMap(hall, name, cancel, proceed, pickSeat) {
  let row = hall.map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return (
          <div className="room-map-seat-taken" onClick={}>{item.id}</div>
        );
      } else {
        return (
          <div className="room-map-seat" onClick={pickSeat}>{item.id}</div>
        );
      }
    });
    return (
      <div className="room-map-row">
        <div className="room-map-row-label">{String.fromCharCode(70 - i)}</div>
          {seat}
        <div className="room-map-row-label">{String.fromCharCode(70 - i)}</div>
      </div>
    );
  });
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container">
        {row}
      </div>
      <div className="room-map-screen">SCREEN</div>
      <div className="room-map-monitor">
        {}
      </div>
      <div className="room-map-button-container">
        <button className="room-map-button-red" onClick={cancel}>Cancel</button>
        <button className="room-map-button-green" onClick={proceed}>Proceed</button>
      </div>
    </div>
  );
}