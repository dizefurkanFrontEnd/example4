import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import pic from '../../../../media/avatar2.png';

class Messages extends Component {
  render() {
    return (
      <div className="Messages">
        <div className="MessagesRow bottomline">
          <h6 className="title">Messages</h6>
          <span className="icon">
            <a href="" className="link">
              Mark all as read
            </a>
            <a href="" className="link">
              <i className="fa fa-cog"></i>
            </a>
          </span>
        </div>
        <a href="" className="MessagesRow bottomline table unseen">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <span className="name">Dan Fisher</span> 
              <span className="small">12:40 pm</span>
            </div>
            <div className="metaAction">
              <p className="small">Listen, I need to talk to you about this!</p>
            </div>
          </div>
        </a>
        <a href="" className="MessagesRow bottomline table">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <span className="name">Dan Fisher</span> 
              <span className="small">12:40 pm</span>
            </div>
            <div className="metaAction">
              <p className="small">
              Listen, I need to talk to you about this! need to talk to you about this!Listen, I need to talk to you about this!
              </p>
            </div>
          </div>
        </a>
        <div className="MessagesRow nopadding">
          <a href="" className="checkAll">CHECK ALL MESSAGES</a>
        </div>
      </div>
    );
  }
}

export default Messages;
