import React from 'react';
import { GetRoomMap } from '../../components/room-map/room-map';
import './buy-seat.css';

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

const mock_data2 = [
  [
    {
      id: 1,
      taken: true
    }, {
      id: 2,
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
    }
  ], [
    {
      id: 1,
      taken: false
    }, {
      id: 2,
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
    }, 
  ]
]

const mock_data3 = [
  [
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
      }
    ]
  ], [
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
      }
    ]
  ], [
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
      }
    ]
  ], [
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
      }
    ]
  ], [
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
        id:10,
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
        id:10,
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
        id:10,
        taken: false
      }
    ]
  ], [
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
      }
    ]
  ]
]

const mock_data4 = [
  [
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
      }
    ]
  ], [
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
      }
    ]
  ], [
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
        taken: true
      }
    ]
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
        <GetRoomMap room_type={4} name="Hall Name" seat={mock_data4}/>
        <div className="buy-seat-button-container">
          <button className="buy-seat-button-red" onClick={this.cancel}>Cancel</button>
          <button className="buy-seat-button-green" onClick={this.proceed}>Proceed</button>
        </div>
      </div>
    );
  }
}