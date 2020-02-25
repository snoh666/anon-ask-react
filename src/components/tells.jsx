import React, { useState } from 'react'
import Tell from './tell';

import styled from 'styled-components';
import ComponentWrapper from './styled-components/ComponentWrapper';

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
    <ComponentWrapper>
      <TellsWrapper>
        <h3>Tells</h3>
        <TellsContent>
          {
            tells.map(tellData => (<Tell key={tellData.id} data={tellData} currentTime={currentTime} />))
          }
        </TellsContent>
      </TellsWrapper>
    </ComponentWrapper>
  );
}

export default Tells;

const TellsWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  padding: 0 50px;
`;

const TellsContent = styled.div`
  margin-top: 50px;
`;