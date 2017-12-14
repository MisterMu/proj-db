import React from 'react';
import './add-event.css';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      e_name: '',
      e_hall: '',
      e_date: '',
      s_time: '',
      e_time: '',
      name: ''
    }
  }

  onSubmit = () => {
    console.log(this.state);
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="add-host">
        <form>
          <label className="add-e-name">
            Event Name:
            <input
              type="text"
              name="e_name"
              placeHolder="Enter event name.."
              value={this.state.e_name}
              onChange={this.onChange}
            />
          </label>
          <label className="add-e-hall">
            Event Hall:
            <select name="e_hall" value={this.state.e_hall} onChange={this.onChange}>
              <option value="Lecture">Lecture</option>
              <option value="Conference">Conference</option>
              <option value="Concert">Concert</option>
              <option value="Auditorium">Auditorium</option>
            </select>
          </label>
          <label className="add-e-date">
            Event Date:
            <input
              type="date"
              name="e_date"
              value={this.state.e_date}
              onChange={this.onChange}
            />
          </label>
          <label className="add-s-time">
            Start Time:
            <input
              type="time"
              name="s_time"
              value={this.state.s_time}
              onChange={this.onChange}
            />
          </label>
          <label className="add-e-time">
            End Time:
            <input
              type="time"
              name="e_time"
              value={this.state.e_time}
              onChange={this.onChange}
            />
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name.."
            value={this.state.value}
            onChange={this.onChange}
          />
          <button className="add-submit" type="button" onClick={this.onSubmit}>Create Event</button>
        </form>
      </div>
    );
  }
}

export { AddEvent }