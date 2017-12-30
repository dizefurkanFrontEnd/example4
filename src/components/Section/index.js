import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

// Left Side
import PostCategories from './PostCategories/';
import Interests from './Interests/';
import People from './People/';
import Badges from './Badges/';
import SocialSharing from './SocialSharing/';
import Adv from './Adv/';
// Middle
import Post from './Post/';
// Right Side
import PopularPosts from './PopularPosts/';
import Images from './Images/';
import Trending from './Trending/';

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-3 col-md-4 leftSide">
              <div className="card">
                <PostCategories />
                <Interests />
                <People />
                <Badges />
                <SocialSharing />
                <Adv />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-8">
              <div className="card">
                <Post />
              </div>
              <div className="card">
                <Post />
              </div>
              <div className="card">
                <Post />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-3 col-md-6 rightSide">
              <div className="card">
                <Adv />
                <PopularPosts />
                <Images />
                <Trending />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
