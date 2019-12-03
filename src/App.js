import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Main from './components/main';
import PrivateRoute from './components/privRoute';
import Tells from './components/tells';

import Wrapper from './components/styled-components/Wrapper';
import {ThemeProvider} from 'styled-components';

import { connect } from 'react-redux';
import { isLogged } from './redux/actions'


function App({ firebase, isAuth }) {

  const theme = {
    fontColor: '#e84393',
    hoverColor: '#BDC3C7',
    bgColor: '#ffffff'
  }

  console.log(isAuth);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Main database={firebase} />
            </Route>
            <Route path="/login">
              <Login database={firebase} />
            </Route>
            <PrivateRoute database={firebase} isAuth={isAuth} path="/tells" Component={Tells} />
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default connect(
  isLogged,
  null
)(App);
