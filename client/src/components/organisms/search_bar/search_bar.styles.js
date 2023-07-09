import styled from "styled-components";

export const SearchIcon = styled.img`
  width: 30px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
export const SearchBarContainer = styled.div`
  display: flex;
  padding: 0 40px;
  align-items: center;
  border-radius: 100px;
  background-color: rgba(217, 217, 217, 0.5);

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
