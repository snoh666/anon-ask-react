import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const Login = ({ setAuth, isAuth }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = e => {
    setUsername(e.target.value);
  }

  const updatePassword = e => {
    setPassword(e.target.value);
  }

  const tryLogin = e => {
    e.preventDefault();

    setAuth(true);

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
          </form>
        )}
      </div>
    </header>
  );
}

export default Login;