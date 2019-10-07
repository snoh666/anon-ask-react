import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './components/login';
import Main from './components/main';
import PrivateRoute from './components/privRoute';


function App() {

  const [isAuth, setAuth] = useState(false);

  // Firebase setup ================
  const firebaseConfig = {
    apiKey: "AIzaSyAsjc-8h32zPZh0qJIBDU1_XSCDxtvhGXE",
    authDomain: "spotted-staszicv2.firebaseapp.com",
    databaseURL: "https://spotted-staszicv2.firebaseio.com",
    projectId: "spotted-staszicv2",
    storageBucket: "",
    messagingSenderId: "948345929307",
    appId: "1:948345929307:web:b846e779c8b6f59778097e",
    measurementId: "G-7KLNE78VG8"
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
            <Main isAuth={isAuth} />
          </Route>
          <Route path="/login">
            <Login setAuth={setAuth} isAuth={isAuth} />
          </Route>
          <PrivateRoute path="/tells" isAuth={isAuth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
