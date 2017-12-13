import React from 'react';
import { Signup } from '../../components/signup/signup';
import { Signin } from '../../components/signin/signin';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-host">
        <div className="login-signup">
          <h2 className="login-title">Sign Up</h2>
          <Signup/> 
        </div>
        <div className="divider"/>
        <div className="login-signin">
          <h2 className="login-title">Sign In</h2>
          <Signin/> 
        </div>
      </div>
    );
  }
}

export {Login}