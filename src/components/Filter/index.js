import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <a href="/" className="link">Latest</a>
              <a href="/" className="link">Trending</a>
              <a href="/" className="link">Featured</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
