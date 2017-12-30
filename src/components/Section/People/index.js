import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import pic from '../../../media/avatar2.png';

class People extends Component {
  render() {
    return (
      <div className="people">
        <div className="box">
          <h5 className="title">People</h5>
          <ul className="list clearfix">
            <li className="listItem"><a href="/"><img src={pic} alt="" className="img-responsive"/></a></li>
            <li className="listItem"><a href="/"><img src={pic} alt="" className="img-responsive"/></a></li>
            <li className="listItem"><a href="/"><img src={pic} alt="" className="img-responsive"/></a></li>
            <li className="listItem"><a href="/"><img src={pic} alt="" className="img-responsive"/></a></li>
            <li className="listItem"><a href="/"><img src={pic} alt="" className="img-responsive"/></a></li>
            <li className="listItem"><a href="/"><img src={pic} alt="" className="img-responsive"/></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default People;
