import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import '../assets/styles/tailwind.css';
import '../assets/styles/vars.css';
import ScrollToTop from '../components/ScrollToTop';
import Home from '../pages/Home';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/hr' />
        </Route>
        <Route path='/hr'>
          <ScrollToTop />
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
