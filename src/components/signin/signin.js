import React from 'react';
import './signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      pass: ''
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
      <form className="signin-host">
        <input
          type="email"
          name="mail"
          value={this.state.mail}
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
        <button className="submit" type="button" onClick={this.onSubmit}>Log In</button>
      </form>
    );
  }
}

export { Signin }