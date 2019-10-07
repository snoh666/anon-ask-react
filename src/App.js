import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div>
              <Link to="/login">Lnik</Link>
            </div>
          </Route>
          <Route path="/login">
            <span>Hello login</span>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
