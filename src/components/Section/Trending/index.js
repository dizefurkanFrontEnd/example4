import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

class Trending extends Component {
  constructor() {
    super();
    
    this.state = {
      key: false,
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ key: !this.state.key });
    let araba = document.getElementsByClassName("TrendingItem");
    araba.innerHTML = "araba";
  }

  render() {
    return (
      <div className="Trending">
        <div className="box">
          <h5 className="title">Trending</h5>
          <div className="TrendingItem" onClick={this.onChange}>
            <a href="/#" className="Trending__link">
              <i className="fa fa-chevron-right"></i> 
              Healthy Environment For Self Esteem
            </a>
          </div>
          <div className="TrendingItem" onClick={this.onChange}>
            <a href="/#" className="Trending__link">
              <i className="fa fa-chevron-right"></i> 
              Healthy Environment For Self Esteem
            </a>
            {
              this.state.key && 
              (
                <div className="TrendingItemDetail">
                  <div className="item">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit at magnam vitae nemo hic possimus unde eum eius delectus id. Sit, veritatis, delectus. Reiciendis, eaque accusamus neque reprehenderit. Ad, alias!
                    </p>
                    <a href="/" className="author">Thomas Pumpky</a>
                  </div>
                </div>
              )
            }
          </div>
          <div className="TrendingItem" onClick={this.onChange}>
            <a href="/#" className="Trending__link">
              <i className="fa fa-chevron-right"></i> 
              Healthy Environment For Self Esteem
            </a>
            {
              this.state.key && 
              (
                <div className="TrendingItemDetail">
                  <div className="item">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit at magnam vitae nemo hic possimus unde eum eius delectus id.
                    </p>
                    <a href="/" className="author">Thomas Pumpky</a>
                  </div>
                  <div className="item">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit at magnam vitae nemo hic possimus unde eum eius delectus id. Sit, veritatis, delectus. Reiciendis, eaque accusamus neque reprehenderit. Ad, alias!
                    </p>
                    <a href="/" className="author">Thomas Pumpky</a>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
