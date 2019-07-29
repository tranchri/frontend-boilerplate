// libraries
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// components
import LandingPage from '../LandingPage/container';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default App;
