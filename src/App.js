import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './components/login';
import Main from './components/main';
import PrivateRoute from './components/privRoute';


function App() {

  const [isAuth, setAuth] = useState(false);

  // Firebase setup ================
  const firebaseConfig = {
    apiKey: "AIzaSyBfNQKseIHTIQ_mja354iVlQ1FSA7wJsl4",
    authDomain: "spotted-staszic.firebaseapp.com",
    databaseURL: "https://spotted-staszic.firebaseio.com",
    projectId: "spotted-staszic",
    storageBucket: "",
    messagingSenderId: "991474295970",
    appId: "1:991474295970:web:a09c45df5e9cca0987e3fb",
    measurementId: "G-YCWSF6THG2"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // End of firebase setup ==========

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login setAuth={setAuth} />
          </Route>
          <PrivateRoute path="/tells" isAuth={isAuth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
