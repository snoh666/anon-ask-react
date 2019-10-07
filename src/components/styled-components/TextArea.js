import styled from 'styled-components';

const TextArea = styled.textarea`
  resize: none;
  padding: .25em;
  background: none;
  border: 1px solid black;
  color: ${props => props.theme.fontColor};

  &::placeholder{
    color: #dfe6e9
  }
`;

export default TextArea;