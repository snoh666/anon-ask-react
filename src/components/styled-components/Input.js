import styled from 'styled-components';

const Input = styled.input`
  padding: .2em .5em;
  margin: 10px 0 5px;
  background: none;
  border: 1px solid black;
  color: ${props => props.theme.fontColor};

  &::placeholder{
    color: #dfe6e9
  }
`;

export default Input;