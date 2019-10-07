import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  width: 200px;
  grid-template-rows: 1fr 1fr 1fr;

  & > button{
    align-self: start;
    justify-self: end;
  }
`;

export default StyledForm;