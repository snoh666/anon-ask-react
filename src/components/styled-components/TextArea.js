import styled from 'styled-components';

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  padding: .25em .5em;
  background: none;
  border: 1.5px solid ${props => props.theme.fontColor};
  border-radius: 10px;
  color: ${props => props.theme.fontColor};
    font-family: 'Montserrat',
    sans-serif;

  &::placeholder{
    color: #BDC3C7;
  }
`;

export default TextArea;