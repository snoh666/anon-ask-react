import styled from 'styled-components';

const ErrorMessage = styled.span`
  font-size: .7em;
  color: ${props => props.succed ? 'green' : 'red'};
`;

export default ErrorMessage;