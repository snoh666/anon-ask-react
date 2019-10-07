import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  max-width: 300px;
  grid-template-rows: 1fr 1fr 1fr;

  & > button{
    align-self: start;
    justify-self: end;
  }
`;

export default StyledForm;