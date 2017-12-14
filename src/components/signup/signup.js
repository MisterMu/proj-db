import React from 'react';
import './signup.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pass: '',
      role: ''
    }
  }

  onSubmit = () => {
    console.log('submit', this.state);
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form className="signup-host">
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeHolder="Name"
          onChange={this.onChange}
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeHolder="Email"
          onChange={this.onChange}
        />
        <input
          type="password"
          name="pass"
          value={this.state.pass}
          placeHolder="Password"
          onChange={this.onChange}
        />
        <select name="role" value={this.state.role} onChange={this.onChange}>
          <option value="">-- Select you role --</option>
          <option value="host">Host</option>
          <option value="attendee">Attendee</option>
        </select>
        <button className="submit" type="button" onClick={this.onSubmit}>Sign up</button>
      </form>
    );
  }
}

export { Signup }