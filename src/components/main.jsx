import React, { useState } from 'react';
import { Link } from 'react-router-dom'

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
    <div>
      <header>
        <h2>Spotted Staszic</h2>
        {isAuth ? (<Link to="/tells">Tells</Link>) : (<Link to="/login">Login</Link>)}
      </header>
      <section>
        <form onSubmit={sendTell}>
          <textarea cols="30" rows="5" placeholder="Send a tell.." value={tell} onChange={updateTell}></textarea>
          <button type="submit">Send</button>
          {errMessage.length > 5 ? (<span className="info">{errMessage}</span>) : null}
        </form>
      </section>
    </div>
  );
}

export default Main;