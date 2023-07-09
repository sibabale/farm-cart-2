import styled from "styled-components";

export const FilterItems = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    display: none
  } 

`;

export const FilterImage = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const FilterItem = styled.li`
  margin: 0 20px;
  padding: 20px;
  list-style: none;
  
  @media screen and (max-width: 768px) {
    margin: 0 10px;
    padding: 10px;
  }

  a {
    color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    span {
      margin-top: 10px
    }
  }

 
`;
