import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const Login = ({ setAuth, isAuth, database, setLoggedUser }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const updateUsername = e => {
    setUsername(e.target.value);
  }

  const updatePassword = e => {
    setPassword(e.target.value);
  }

  const tryLogin = e => {
    e.preventDefault();

    const db = database.collection('/users');
    db.doc(username).get().then(doc => {
      if (doc.exists) {
        if(doc.data().password === password){
          setErrMessage('');
          setLoggedUser(username);
          setAuth(true);
        } else {
          setErrMessage("User or password is incorrect!");
        }
      } else {
        // doc.data() will be undefined in this case
        setErrMessage("User or password is incorrect!");
      }
    }).catch(err => console.log(err))

  }

  return (
    <header>
      <div className="Login">
        {isAuth ? (
          <Redirect to="/" />
        ) : (
          <form onSubmit = { tryLogin }>
            <input type="text" value={username} onChange={updateUsername} />
            <input type="password" value={password} onChange={updatePassword} />
            <button type="submit">Login</button>
            {errMessage.length > 5 ? (<span className="info" >{errMessage}</span>) : null}
          </form>
        )}
      </div>
    </header>
  );
}

export default Login;