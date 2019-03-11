import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Upload, Timetracker } from './pages';
import { Particle } from './components';

import './App.css'
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Particle id="particles" />
          <h1 className="text-center font-italic">Time Tracker</h1>
          <hr />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Upload} />
              <Route exact path="/timetracker" component={Timetracker} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
