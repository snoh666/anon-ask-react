import styled from 'styled-components';

const Button = styled.button`
  margin: 10px 0 0;
  padding: .3em 2em;
  font-weight: 500;
  font-size: .65em;
  background: ${props => props.theme.fontColor};
  border: none;
  border-radius: 10px;
  display: inline;
  cursor: pointer;
  color: ${props => props.theme.bgColor};
  transition: all .5s ease;

    font-family: 'Montserrat',
    sans-serif;

  &:hover{
    background: ${props => props.theme.hoverColor};
  }
`;


export default Button;