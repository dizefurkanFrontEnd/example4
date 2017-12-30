import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <div className="logo">
                <a href="/">
                  <i className="fa fa-apple"></i>
                </a>
              </div>
              <div className="tA-C itemMargin">
                <span className="text d-IB m-rLink">Create a new account to Open list or</span>
                <a href="/login" className="Register__link d-IB">Sign in</a>
              </div>
              <form className="RegisterForm">
                <input type="input" placeholder="Full Name"/>
                <input type="input" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <div className="tA-C">
                  <input type="checkbox"/>
                  <label htmlFor="checkbox" className="vaM">I Accept the </label>
                </div>
                <div className="tA-C">
                  <a href="" className="Register__link ta-C d-IB">Terms and Services</a>
                </div>
                <input type="submit" value="CREATE AN ACCOUNT"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
