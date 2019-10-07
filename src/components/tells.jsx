import React, { useState } from 'react'
import Tell from './tell';

const Tells = ({ database }) => {

  const [tells, setTells] = useState([]);
  const db = database.firestore().collection('/tells');
  const currentTime = new Date().getTime();

  db.get().then(query => {
    const tellsArray = [];
    query.forEach((doc) => {
      tellsArray.push({
        id: doc.id,
        ...doc.data()
      });
    });

    setTells(tellsArray)
  }).catch(err => console.log(err));

  return (
    <div>
      <h3>Tells</h3>
      <div>
        {
          tells.map(tellData => ( <Tell key={tellData.id} data={tellData} currentTime={currentTime} /> ))
        }
      </div>
    </div>
  );
}

export default Tells;