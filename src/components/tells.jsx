import React from 'react'

const Tells = ({ database }) => {

  const db = database.collection('/tells');

  // db.get().then(doc => {
  //   if(doc.exist) {
  //     console.log(doc.data());
  //   }
  // }).catch(err => console.log(err))

  return (
    <div>
      <span>Tells route</span>
    </div>
  );
}

export default Tells;