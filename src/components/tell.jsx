import React from 'react'
import styled from 'styled-components';

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
      <TellName>
        <span>{tell}</span>
      </TellName>
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


const TellName = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr .5fr 30px;
  grid-gap: 20px 10px;
  margin: 10px 0;
`;