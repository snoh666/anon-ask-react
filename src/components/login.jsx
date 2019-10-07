import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const Login = ({ setAuth, isAuth }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            <input type = "text" className = "username"/>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </header>
  );
}

export default Login;