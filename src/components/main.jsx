import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './styled-components/Button';
import TextArea from './styled-components/TextArea';
import StyledForm from './styled-components/StyledForm';
import ErrorMessage from './styled-components/ErrorMessage';
import Header from './styled-components/Header';
import ComponentWrapper from './styled-components/ComponentWrapper';

const Main = ({ isAuth, database }) => {

  const [tell, setTell] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const updateTell = e => {
    setTell(e.target.value);
  }

  const sendTell = e => {
    e.preventDefault();

    const db = database.firestore().collection('/tells');

    // Here you need to send a tell to firebase storage

    if(tell.length > 5) {

      db.add({
        tell: tell,
        time: new Date().getTime(),
        isAdded: false
      });

      setTell('');

    } else {
      setErrMessage('Tell has to be longer than 5 signs.')
    }

  }

  return (
    <ComponentWrapper>
      <Header>
        <h2>Spotted - Staszic</h2>
        {isAuth ? (<Link to="/tells"><Button>Tells</Button></Link>) : (<Link to="/login"><Button>Login</Button></Link>)}
      </Header>
      <section>
        <StyledForm onSubmit={sendTell}>
          <TextArea cols="30" rows="5" placeholder="Send a tell.." value={tell} onChange={updateTell}></TextArea>
          <Button type="submit">Send</Button>
          {errMessage.length > 5 ? (<ErrorMessage>{errMessage}</ErrorMessage>) : null}
        </StyledForm>
      </section>
    </ComponentWrapper>
  );
}

export default Main;