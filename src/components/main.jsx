import React, { useState } from 'react';

import { getUserData } from '../redux/actions';
import { connect } from 'react-redux';

import Button from './styled-components/Button';
import TextArea from './styled-components/TextArea';
import StyledForm from './styled-components/StyledForm';
import ErrorMessage from './styled-components/ErrorMessage';
import ComponentWrapper from './styled-components/ComponentWrapper';

const Main = ({ database }) => {

  const [tell, setTell] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [succes, setSucces] = useState(false);

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
      }).then(_ => {
        setSucces(true);
        setErrMessage('Tell has been sent.');
      }).catch(err => {
        setSucces(false);
        setErrMessage('Something went wrong :c');
        console.log(err);
      });

      setTell('');

    } else {
      setSucces(false);
      setErrMessage('Tell has to be longer than 5 signs.')
    }

  }

  return (
    <ComponentWrapper>
      <section>
        <StyledForm tellForm onSubmit={sendTell}>
          <TextArea cols="30" rows="5" placeholder="Send a tell.." value={tell} onChange={updateTell}></TextArea>
          <Button type="submit">Send</Button>
          {errMessage.length > 5 ? (<ErrorMessage succed={succes} >{errMessage}</ErrorMessage>) : null}
        </StyledForm>
      </section>
    </ComponentWrapper>
  );
}

export default connect(
  getUserData,
  null
)(Main);