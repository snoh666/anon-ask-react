import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  width: ${props => props.tellForm ? '300px' : '200px'};
  margin: 20px 0 0;
  grid-template-rows: 1fr 1fr 1fr;

  & > button{
    align-self: start;
    justify-self: end;
  }
`;

export default StyledForm;