import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

class SocialSharing extends Component {
  render() {
    return (
      <div className="SocialSharing">
        <div className="box">
          <h5 className="title">Social Sharing</h5>
          <ul className="list clearfix">
            <li className="listItem c1"><a href="/"><i className="fa fa-twitter"></i></a></li>
            <li className="listItem c2"><a href="/"><i className="fa fa-tumblr"></i></a></li>
            <li className="listItem c3"><a href="/"><i className="fa fa-facebook"></i></a></li>
            <li className="listItem c4"><a href="/"><i className="fa fa-google"></i></a></li>
            <li className="listItem c5"><a href="/"><i className="fa fa-pinterest"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SocialSharing;
