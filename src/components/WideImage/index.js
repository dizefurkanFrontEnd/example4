import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

import img from '../../media/img2.jpg';

class WideImage extends Component {
  render() {
    return (
      <div className="WideImage">
        <img src={img} className="img-responsive" alt="img" />
      </div>
    );
  }
}

export default WideImage;
