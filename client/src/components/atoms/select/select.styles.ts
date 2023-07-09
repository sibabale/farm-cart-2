import styled from 'styled-components';

export const SelectContainer = styled.select`
  height: 50px;
  border: none;
  padding: 0 10px;
  outline: none;
  border-radius: 10px;
  background-color: #D9D9D9;

  option:disabled {
    color: #747574;
  };


  &:valid {
    color: #747574;
  }
`;
