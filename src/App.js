import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import * as ROUTE from './constants/routes';
import {Home, Browse, Signin, Signup} from './pages';


export default function App() {
  return (
    <Router>
      <Route exact path={ROUTE.BROWSE}>
        <Browse/>
      </Route>
      <Route exact path={ROUTE.SIGN_IN}>
        <Signin/>
      </Route>
      <Route exact path={ROUTE.SIGN_UP}>
        <Signup/>
      </Route>
      <Route exact path={ROUTE.HOME}>
        <Home/>
      </Route>
    </Router>
    
  );
}


