import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './components/login';
import Main from './components/main';


function App() {



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
