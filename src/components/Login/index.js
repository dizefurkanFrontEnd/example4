import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <div className="logo">
                <a href="/">
                  <i className="fa fa-apple"></i>
                </a>
              </div>
              <div className="tA-C itemMargin">
                <span className="text d-IB">Log In to Open List or </span>
                <a href="/register" className="Login__link d-IB"> create an account</a>
              </div>
              <div className="tA-C signInSocial itemMargin">
                <p>Sign in using social media</p>
                <a href="/#" className="socialLink">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="/#" className="socialLink">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/#" className="socialLink">
                  <i className="fa fa-google"></i>
                </a>
              </div>
              <p className="tA-C">or Sign in using email address</p>
              <form className="LoginForm">
                <input type="input" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <div className="tA-C">
                  <input type="checkbox"/>
                  <label htmlFor="checkbox" className="vaM">Remember Me</label>
                </div>
                <div className="tA-C">
                  <a href="" className="Login__link ta-C d-IB">Forget password?</a>
                </div>
                <input type="submit" value="Sign In"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
