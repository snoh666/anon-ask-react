import React from 'react'
import GridWrapper from './styled-components/GridWrapper';

const Tell = ({data: {tell, time, isAdded}, currentTime}) => {

  return (
    <GridWrapper>
      <div>{tell}</div>
      <div>{Math.floor((currentTime - time) / 1000 / 60) + 'min ago.'}</div>
      <div>{isAdded ? 'true' : 'false'}</div>
    </GridWrapper>
  );
}

export default Tell;