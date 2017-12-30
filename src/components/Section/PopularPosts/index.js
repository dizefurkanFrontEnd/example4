import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import avatar2 from '../../../media/avatar2.png';

class PopularPosts extends Component {
  render() {
    return (
      <div className="PopularPosts">
        <div className="box">
          <h5 className="title">Popular Posts</h5>
          <div className="item table">
            <div className="table-row">
              <div className="table-cell">
                <img src={avatar2} alt="" className="item__img"/>
              </div>
              <div className="table-cell wF">
                <a href="/" className="item__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                <span className="item__time">2 days ago</span>
              </div>
            </div>
          </div>
          <div className="item table">
            <div className="table-row">
              <div className="table-cell">
                <img src={avatar2} alt="" className="item__img"/>
              </div>
              <div className="table-cell wF">
                <a href="/" className="item__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                <span className="item__time">2 days ago</span>
              </div>
            </div>
          </div>
          <div className="item table">
            <div className="table-row">
              <div className="table-cell">
                <img src={avatar2} alt="" className="item__img"/>
              </div>
              <div className="table-cell wF">
                <a href="/" className="item__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
                <span className="item__time">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularPosts;
