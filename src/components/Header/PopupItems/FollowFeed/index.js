import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';
import pic from '../../../../media/avatar2.png';

class FollowFeed extends Component {
  render() {
    return (
      <div className="FollowFeed">
        <div className="FollowFeedRow bottomline">
          <h6 className="title">Follow Feed</h6>
          <span className="icon"><a href=""><i className="fa fa-cog"></i></a></span>
        </div>
        <div className="FollowFeedRow bottomline table">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <a href="">Dan Fisher</a> 
              <span className="small">started following you</span>
            </div>
            <div className="metaAction">
              <span className="small">544 Mutual</span>
              <a href="" className="accept">
                <i className="fa fa-check"></i>
              </a>
              <a href="" className="ignore">
                <i className="fa fa-ban"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="FollowFeedRow bottomline table">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <a href="">Said Furkan Dize Dahada uzun</a> 
              <span className="small">started following you</span>
            </div>
            <div className="metaAction">
              <span className="small">544 Mutual</span>
              <a href="" className="accept">
                <i className="fa fa-check"></i>
              </a>
              <a href="" className="ignore">
                <i className="fa fa-ban"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="FollowFeedRow bottomline table">
          <div className="table-cell">
            <img src={pic} alt="" className="img" />
          </div>
          <div className="table-cell">
            <div className="meta">
              <a href="">Dan Fisher</a> 
              <span className="small">started following you</span>
            </div>
            <div className="metaAction">
              <span className="small">544 Mutual</span>
              <a href="" className="accept">
                <i className="fa fa-check"></i>
              </a>
              <a href="" className="ignore">
                <i className="fa fa-ban"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowFeed;
