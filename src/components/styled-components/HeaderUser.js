import styled from 'styled-components';

const UserHead = styled.div`
  color: ${props => props.theme.fontColor};
  font-size: .75em;
  & > span{
    margin: 0 5px;
  }
`;

export default UserHead;