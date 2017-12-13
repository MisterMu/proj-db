import React from 'react';
import './room-map.css';

export function GetRoomMap(props) {
  if (props.room_type == 1) {
    return getLectureHallMap(props.seat, props.name, props.cancel, props.proceed, props.pickSeat);
  } else if (props.room_type == 2) {
    return getConferenceMap(props.seat, props.name);
  // } else if (props.room_type == 3) {
  //   return getConcertHallMap();
  } else if (props.room_type == 4) {
    return getAuditoriumMap(props.seat, props.name);
  } else {
    return null;
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
  let rowA = room[0].map((item) => {
    if (item.taken) {
      return <div className="room-map-seat-taken vertical-seat">{item.id}</div>
    } else {
      return <div className="room-map-seat vertical-seat">{item.id}</div>
    }
  });
  let rowB = room[1].map((item) => {
    if (item.taken) {
      return <div className="room-map-seat-taken horizontal-seat">{item.id}</div>
    } else {
      return <div className="room-map-seat horizontal-seat">{item.id}</div>
    }
  })
  let rowC = room[2].map((item) => {
    if (item.taken) {
      return <div className="room-map-seat-taken vertical-seat">{item.id}</div>
    } else {
      return <div className="room-map-seat vertical-seat">{item.id}</div>
    }
  })
  let rowD = room[3].map((item) => {
    if (item.taken) {
      return <div className="room-map-seat-taken horizontal-seat">{item.id}</div>
    } else {
      return <div className="room-map-seat horizontal-seat">{item.id}</div>
    }
  })
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container conference-room">
        <div className="conference-board"></div>
        <div className="conference-table">
          <div className="conference-row-A">
            {rowA}
          </div>
          <div className="conference-row-B">
            {rowB}
          </div>
          <div className="conference-row-C">
            {rowC}
          </div>
          <div className="conference-row-D">
            {rowD}
          </div>
        </div>
      </div>
    </div>
  );
}

function getAuditoriumMap(room, name) {
  let zone1 = room[0].map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return <div className="room-map-seat-taken vertical-seat">{item.id}</div>
      } else {
        return <div className="room-map-seat vertical-seat">{item.id}</div>
      }
    });
    return (
      <div className="room-map-row">
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + i)}</div>
        {seat}
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + i)}</div>
      </div>
    );
  });
  let zone2 = room[1].map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return <div className="room-map-seat-taken vertical-seat">{item.id}</div>
      } else {
        return <div className="room-map-seat vertical-seat">{item.id}</div>
      }
    });
    return (
      <div className="room-map-row">
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + i)}</div>
        {seat}
        <div className="room-map-row-label vertical-seat">{String.fromCharCode(65 + i)}</div>
      </div>
    );
  });
  let zone3 = room[2].map((data, i) => {
    let seat = data.map((item) => {
      if (item.taken) {
        return <div className="room-map-seat-taken horizontal-seat">{item.id}</div>
      } else {
        return <div className="room-map-seat horizontal-seat">{item.id}</div>
      }
    });
    return (
      <div className="room-map-column">
        <div className="room-map-row-label horizontal-seat">{String.fromCharCode(65 + i)}</div>
        {seat}
        <div className="room-map-row-label horizontal-seat">{String.fromCharCode(65 + i)}</div>
      </div>
    );
  });
  return (
    <div className="room-map-host">
      <h2 className="room-map-name">{name}</h2>
      <div className="room-map-seat-container auditorium-room">
        <div className="auditorium-projection-room">
            Rear Projection Room
          <div className="auditorium-screen">
            screen
          </div>
        </div>
        <div className="auditorium-zone-1">
          {zone1}
        </div>
        <div className="auditorium-zone-2">
          {zone2}
        </div>
        <div className="auditorium-zone-3">
          {zone3}
        </div>
      </div>
    </div>
  );
}