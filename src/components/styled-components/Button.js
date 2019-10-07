import styled from 'styled-components';

const Button = styled.button`
  margin: 10px 0 0;
  padding: .25em 1em;
  background: none;
  border: 1px solid ${props => props.tellCheck ? 'black' : 'black'};
  display: inline;
  cursor: pointer;
  color: ${props => props.tellCheck ? '#d63031' : props.theme.fontColor}
`;


export default Button;