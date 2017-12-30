import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/';
import Login from './components/Login/';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
    );
  }
}

export default App;
