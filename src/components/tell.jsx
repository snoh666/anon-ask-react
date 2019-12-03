import React from 'react'
import GridWrapper from './styled-components/GridWrapper';

const Tell = ({data: {tell, time, isAdded}, currentTime}) => {

  const getTime = (timeValue) => {
    let timeAgo = Math.floor((currentTime - timeValue) / 1000 / 60);
    let suffix = 'min ago.';
    if(timeAgo >= 60) {
      timeAgo = Math.floor(timeAgo / 60);
      suffix = 'hours ago.';
      if(timeAgo > 24) {
        timeAgo = Math.floor(timeAgo / 24);
        suffix = 'days ago.';
        if(timeAgo > 30) {
          timeAgo = Math.floor(timeAgo / 30);
          suffix = 'months ago.';
        }
      }
    }

    return `${timeAgo} ${suffix}`;
  }

  return (
    <GridWrapper>
      <div>{tell}</div>
      <div>
        {getTime(time)}
      </div>
      <div>
        {isAdded ? 'T' : 'F'}
      </div>
    </GridWrapper>
  );
}

export default Tell;