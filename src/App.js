import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Main from './components/main';
import PrivateRoute from './components/privRoute';
import Tells from './components/tells';


function App({ firebase }) {

  const [isAuth, setAuth] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main isAuth={isAuth} database={firebase} />
          </Route>
          <Route path="/login">
            <Login setLoggedUser={setLoggedUser} database={firebase} setAuth={setAuth} isAuth={isAuth} />
          </Route>
          <PrivateRoute database={firebase} isAuth={isAuth} path="/tells" Component={Tells} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
