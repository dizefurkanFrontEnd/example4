import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

class Interests extends Component {
  render() {
    return (
      <div className="Interests">
        <div className="box">
          <h5 className="title">Your Interests</h5>
          <ul className="list">
            <li className="listItem"><a href="/">Arts</a></li>
            <li className="listItem"><a href="/">Beauty</a></li>
            <li className="listItem"><a href="/">Entartainment</a></li>
            <li className="listItem"><a href="/">Travel</a></li>
            <li className="listItem"><a href="/">Personal</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Interests;
