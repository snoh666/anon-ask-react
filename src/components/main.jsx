import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Main = ({ isAuth }) => {

  const [tell, setTell] = useState('');

  const updateTell = e => {
    setTell(e.target.value);
  }

  const sendTell = e => {
    e.preventDefault();

    // Here you need to send a tell to firebase storage
  }

  return (
    <div>
      <header>
        <h2>Spotted Staszic</h2>
        {isAuth ? (<Link to="/tells">Tells</Link>) : (<Link to="/login">Login</Link>)}
      </header>
      <section>
        <form onSubmit={sendTell}>
          <textarea cols="30" rows="5" value={tell} onChange={updateTell}></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Main;