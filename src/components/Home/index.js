import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

import Header from '../Header/';
import Filter from '../Filter/';
import WideImage from '../WideImage/';
import Section from '../Section/';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Filter />
        <WideImage />
        <Section />
      </div>
    );
  }
}

export default Home;
