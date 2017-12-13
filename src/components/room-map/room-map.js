import React from 'react';
import './room-map.css';

export function GetRoomMap(props) {
  if (props.room_type == 1) {
    return getLectureHallMap(props.seat, props.name, props.cancel, props.proceed, props.pickSeat);
  } else if (props.room_type == 2) {
    return getConferenceMap(props.seat, props.name);
  // } else if (props.room_type == 3) {
  //   return getConcertHallMap();
  // } else if (props.room_type == 4) {
  //   return getAuditoriumMap();
  }
}

function getLectureHallMap(hall, name, pickSeat) {
  let row = hall.map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return (
          <div className="room-map-seat-taken vertical-seat" onClick={pickSeat}>{item.id}</div>
        );
      } else {
        return (
          <div className="room-map-seat vertical-seat" onClick={pickSeat}>{item.id}</div>
        );
      }
    });
    return (
      <div className="room-map-row">
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(70 - i)}</div>
          {seat}
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(70 - i)}</div>
      </div>
    );
  });
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container lecture-hall">
        {row}
        <div className="room-map-screen">SCREEN</div>
      </div>
    </div>
  );
}

function getConferenceMap(room, name) {
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container">
        <div className="room-map-table"/>
      </div>
    </div>
  );
}