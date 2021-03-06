import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

import FollowFeed from './PopupItems/FollowFeed/';
import Messages from './PopupItems/Messages/';
import Notifications from './PopupItems/Notifications/';

import avatar from '../../media/avatar2.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 clearfix">
              <div className="HeaderBox fLeft clearfix">
                <div className="logo">
                  <i className="fa fa-apple"></i>
                </div>
                <div className="list clearfix">
                  <ul className="clearfix">
                    <li><a href="/" className="listItem">HOME</a></li>
                    <li><a href="/" className="listItem">ALL PAGES</a></li>
                    <li><a href="/" className="listItem">SHORT CODES</a></li>
                    <li><a href="/" className="listItem">ALL ELEMENTS</a></li>
                  </ul>
                </div>
                <div className="Headertoggle">
                  <a href="/login">
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              </div>
              <div className="HeaderBox fRight hideMobile clearfix">
                <form>
                  <input type="input" placeholder="Search" className="setHeight" />
                    <i className="fa fa-search"></i>
                </form>
                <a href="/" className="addpost setHeight">
                  + ADD POST
                </a>
                <div className="authArea clearfix">
                  <div className="authAreaItemBox">
                    <a href="/" className="authArea__item">
                      <i className="fa fa-user-o"></i>
                    </a>
                    <div className="headerItemMoreBox">
                      <FollowFeed />
                    </div>
                  </div>
                  <div className="authAreaItemBox">
                    <a href="/" className="authArea__item">
                      <i className="fa fa-comments-o"></i>
                    </a>
                    <div className="headerItemMoreBox">
                      <Messages />
                    </div>
                  </div>
                  <div className="authAreaItemBox">
                    <a href="/" className="authArea__item">
                      <i className="fa fa-bell"></i>
                    </a>
                    <div className="headerItemMoreBox">
                      <Notifications />
                    </div>
                  </div>
                </div>
                <div className="picArea">
                  <a href="/login"><img src={avatar} className="img-responsive" alt="img" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
