import React from 'react';
import { BrowserRouter as Router, Route, Switch,  Link } from "react-router-dom";
import Login from './components/login';
import Main from './components/main';
import PrivateRoute from './components/privRoute';
import Tells from './components/tells';

import { ThemeProvider } from 'styled-components';
import Wrapper from './components/styled-components/Wrapper';
import Header from './components/styled-components/Header';
import HeaderUser from './components/styled-components/HeaderUser';

import { connect } from 'react-redux';
import { getUserData } from './redux/actions'


function App({ firebase, isAuth, username }) {

  const theme = {
    fontColor: '#e84393',
    hoverColor: '#BDC3C7',
    bgColor: '#ffffff'
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header>
            <Link to="/">
              <h2>Spotted Staszic</h2>
            </Link>
            {isAuth ? (
              <HeaderUser>
                <span>Witaj, {username}. </span>
                <Link to="/tells">Sprawdz pytania</Link>
              </HeaderUser>
            ) : (<Link to="/login">Login</Link>)}
          </Header>
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
  getUserData,
  null
)(App);
