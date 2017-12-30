import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

class PostCategories extends Component {
  render() {
    return (
      <div className="PostCategories">
        <div className="box">
          <h5 className="title">Post Categories</h5>
          <div className="table">
            <div className="table-row">
              <div className="table-cell"><span><i className="fa fa-star"></i></span></div>
              <div className="table-cell"><span><i className="fa fa-clock-o"></i></span></div>
              <div className="table-cell"><span><i className="fa fa-bullhorn"></i></span></div>
              <div className="table-cell"><span><i className="fa fa-picture-o"></i></span></div>
              <div className="table-cell"><span><i className="fa fa-bar-chart"></i></span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCategories;
