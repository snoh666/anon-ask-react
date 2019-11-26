import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  max-width: 550px;
  margin: 1em;
  padding: 1em .25em;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & h2 {
    font-weight: lighter;
    border-bottom: 1px solid ${props => props.theme.fontColor};
  }
  & a {
    text-transform: none;
    color: inherit;
    transition: transform .4s ease;
    &:hover{
      transform: scale(1.15);
    }
    &[href="/login"] {
      margin-top: 10px;
      button {
        margin: 0;
      }
    }
  }
`;

export default Header;