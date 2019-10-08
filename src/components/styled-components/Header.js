import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  margin: 1em;
  padding: 1em .25em;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & h2 {
    font-weight: lighter;
    border-bottom: 1px solid ${props => props.theme.fontColor};
  }
`;

export default Header;