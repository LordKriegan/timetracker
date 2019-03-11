import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {upload, timetracker} from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={upload} />
          <Route exact path="/timetracker" component={timetracker} />
        </Switch>
      </Router>
    );
  }
}

export default App;
