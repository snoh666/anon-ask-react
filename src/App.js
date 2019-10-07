import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Main from './components/main';
import PrivateRoute from './components/privRoute';
import Tells from './components/tells';


function App({ firebase }) {

  const [isAuth, setAuth] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');


  // db.doc('admin').get().then(doc => {
  //   if (doc.exists) {
  //     console.log("Document data:", doc.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }).catch(err => console.log(err))

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main isAuth={isAuth} />
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
