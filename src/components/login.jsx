import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

import StyledForm from './styled-components/StyledForm';
import ErrorMessage from './styled-components/ErrorMessage';
import ComponentWrapper from './styled-components/ComponentWrapper';
import Button from './styled-components/Button';
import Input from './styled-components/Input';
import Label from './styled-components/Label';
import InputField from './styled-components/InputField';

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
    const db = database.firestore().collection('/users');
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
      <ComponentWrapper>
        {isAuth ? (
          <Redirect to="/" />
        ) : (
          <StyledForm onSubmit={ tryLogin }>
            <InputField>
              <Input id="username" type="text" value={username} onChange={updateUsername} placeholder="&nbsp;" />
              <Label htmlFor="username">Username</Label>
            </InputField>
          <InputField>
              <Input id="password" type="password" value={password} onChange={updatePassword} placeholder="&nbsp;" />
              <Label htmlFor="password">Password</Label>
          </InputField>

            <Button type="submit">Login</Button>
            {errMessage.length > 5 ? (<ErrorMessage>{errMessage}</ErrorMessage>) : null}
          </StyledForm>
        )}
      </ComponentWrapper>
  );
}

export default Login;