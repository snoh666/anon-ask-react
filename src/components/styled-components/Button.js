import styled from 'styled-components';

const Button = styled.button`
  margin: 10px 0 0;
  padding: .25em 1em;
  background: none;
  border: 1px solid black;
  display: inline;
  cursor: pointer;
  color: ${props => props.theme.fontColor}
`;


export default Button;