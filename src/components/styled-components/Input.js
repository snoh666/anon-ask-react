import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: .4em .5em;
  margin: calc(10px + .05em) 0 5px;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  color: ${props => props.theme.fontColor};

  &:focus + label{
    top: -.7em;
  }
  &:not(:placeholder-shown) + label{
    top: -.7em;
  }
`;

export default Input;