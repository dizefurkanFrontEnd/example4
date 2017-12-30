import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import pic from '../../../media/adv360x360.png';

class SocialSharing extends Component {
  render() {
    return (
      <div className="SocialSharing">
        <div className="box">
          <img src={pic} alt="" className="img-responsive" />
        </div>
      </div>
    );
  }
}

export default SocialSharing;
