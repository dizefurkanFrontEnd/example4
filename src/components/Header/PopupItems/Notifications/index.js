import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import pic from '../../../../media/avatar2.png';

class Notifications extends Component {
  render() {
    return (
      <div className="Notifications">
        <div className="NotificationsRow bottomline">
          <h6 className="title">Notifications</h6>
          <span className="icon">
            <a href="" className="link">
              Mark all as read
            </a>
            <a href="" className="link">
              <i className="fa fa-cog"></i>
            </a>
          </span>
        </div>
        <div className="NotificationsRow bottomline table unseen">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <a href="" className="name">Dan Fisher</a> 
              <span className="small">liked your</span>
              <a href="" className="eventLink">photo</a>
            </div>
            <div className="metaTime">
              <span className="small">5 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="NotificationsRow bottomline table unseen">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <a href="" className="name">Dan Fisher</a> 
              <span className="small">liked your</span>
              <a href="" className="eventLink">photo</a>
            </div>
            <div className="metaTime">
              <span className="small">5 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="NotificationsRow bottomline table unseen">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <a href="" className="name">Dan Fisher</a> 
              <span className="small">liked your</span>
              <a href="" className="eventLink">photo</a>
            </div>
            <div className="metaTime">
              <span className="small">5 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="NotificationsRow bottomline table">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <a href="" className="name">Dan Fisher</a> 
              <span className="small">accept your friend request.</span>
            </div>
            <div className="metaTime">
              <span className="small">5 minutes ago</span>
            </div>
          </div>
        </div>
        <div className="NotificationsRow nopadding">
          <a href="" className="checkAll">CHECK ALL Notifications</a>
        </div>
      </div>
    );
  }
}

export default Notifications;
