import React from 'react';
import { GetRoomMap } from '../../components/room-map/room-map';

const mock_data = [
  [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }, {
      id: 10,
      taken: false
    }, {
      id: 11,
      taken: false
    }, {
      id: 12,
      taken: false
    }, {
      id: 13,
      taken: false
    }, {
      id :14,
      taken: false
    }, {
      id: 15,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }, {
      id: 10,
      taken: false
    }, {
      id: 11,
      taken: false
    }, {
      id: 12,
      taken: false
    }, {
      id: 13,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }, {
      id: 10,
      taken: false
    }, {
      id: 11,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }, {
      id: 10,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: false
    }, {
      id: 8,
      taken: false
    }, {
      id: 9,
      taken: false
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
      taken: false
    }, {
      id: 3,
      taken: false
    }, {
      id: 4,
      taken: false
    }, {
      id: 5,
      taken: false
    }, {
      id: 6,
      taken: false
    }, {
      id: 7,
      taken: true
    }
  ]
]

export class BuySeat extends React.Component {
  cancel() {
    console.log('cancel');
  }

  proceed() {
    console.log('proceed');
  }

  render() {
    return(
      <div>
        <GetRoomMap room_type={1} name="Hall Name" seat={mock_data} cancel={this.cancel} proceed={this.proceed}/>
      </div>
    );
  }
}