import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

class Badges extends Component {
  render() {
    return (
      <div className="Badges">
        <div className="box">
          <h5 className="title">Badges</h5>
          <ul className="list clearfix">
            <li className="listItem c1"><a href="/"><i className="fa fa-certificate"></i></a></li>
            <li className="listItem c2"><a href="/"><i className="fa fa-bluetooth"></i></a></li>
            <li className="listItem c3"><a href="/"><i className="fa fa-bookmark"></i></a></li>
            <li className="listItem c4"><a href="/"><i className="fa fa-bomb"></i></a></li>
            <li className="listItem c5"><a href="/"><i className="fa fa-beer"></i></a></li>
            <li className="listItem c6"><a href="/"><i className="fa fa-child"></i></a></li>
            <li className="listItem c7"><a href="/"><i className="fa fa-book"></i></a></li>
            <li className="listItem c8"><a href="/"><i className="fa fa-ban"></i></a></li>
            <li className="listItem c9"><a href="/"><i className="fa fa-bug"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Badges;
