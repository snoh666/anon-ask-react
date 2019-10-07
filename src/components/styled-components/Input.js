import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: .2em .5em;
  margin: 10px 0 5px;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  color: ${props => props.theme.fontColor};

  &:focus + label{
    top: -.45em;
  }
  &:not(:placeholder-shown) + label{
    top: -.45em;
  }
`;

export default Input;