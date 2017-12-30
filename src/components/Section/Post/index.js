import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import pic from '../../../media/slider-1.jpg';
import avatar2 from '../../../media/avatar2.png';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <div className="box">
          <div className="imgBox">
            <span>PHOTOGRAPHY</span>
            <img src={pic} alt="" className="img img-responsive" />
          </div>
          <div className="infoBox table">
            <div className="table-row">
              <div className="table-cell">
                <img src={avatar2} alt="" className="infoBox__img"/>
              </div>
              <div className="table-cell wF">
                <a href="/" className="infoBox__title">Masum Rana</a>
                <span className="infoBox__time">5 minutes ago</span>
              </div>
              <div className="table-cell">
                <i className="infoBox__moreIcon fa fa-ellipsis-v"></i>
              </div>
            </div>
          </div>
          <hr/>
          <div className="content">
            <h3 className="content__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p className="content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus provident minus, perferendis tempora laudantium. Tenetur repellendus at sint necessitatibus unde consequatur est aliquam non, recusandae ad porro, vitae. Rem, dicta!
            </p>
          </div>
          <hr className="hrfull" />
          <div className="Post__footer table">
            <div className="table-row">
              <div className="table-cell">
                <a href="/">
                  <i className="fa fa-share-alt"></i>
                </a>
                <span>528k</span>
              </div>
              <div className="table-cell">
                <a href="/">
                  <i className="fa fa-caret-up"></i>
                </a>
                <a href="/">
                  <i className="fa fa-caret-down"></i>
                </a>
                <span>483</span>
              </div>
              <div className="table-cell">
                <a href="/">
                  <i className="fa fa-comments-o"></i>
                  <span>14</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
