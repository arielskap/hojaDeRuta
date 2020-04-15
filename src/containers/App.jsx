import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Home from '../pages/Home';
import Login from '../pages/Login';
import '../assets/styles/tailwind.css';
import 'tippy.js/dist/tippy.css';
import '../assets/styles/vars.css';
import '../assets/styles/app.css';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/form' />
        </Route>
        <Route path='/form'>
          <ScrollToTop />
          <Login />
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
