import React from 'react'

const Tell = ({data: {tell, time, isAdded}, currentTime}) => {

  return (
    <div>
      <div>{tell}</div>
      <div>{Math.floor((currentTime - time) / 1000 / 60) + 'min ago.'}</div>
      <div>{isAdded ? 'true' : 'false'}</div>
    </div>
  );
}

export default Tell;