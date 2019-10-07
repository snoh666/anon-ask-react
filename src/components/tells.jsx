import React from 'react'

const Tells = ({ database }) => {

  const db = database.firestore().collection('/tells');

  db.get().then(query => {
    query.forEach((doc) => {
      console.log(doc.data());
    });
  }).catch(err => console.log(err));

  return (
    <div>
      <span>Tells route</span>
    </div>
  );
}

export default Tells;