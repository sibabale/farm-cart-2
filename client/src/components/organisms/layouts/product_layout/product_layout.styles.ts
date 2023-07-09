import styled from "styled-components";

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductLayoutContent = styled.div`
width: 100%;
 @media screen and (max-width: 425px) {
    width: 100%;
  }
`
export const ProductLayoutContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const ProductsContainer = styled.div`
  gap: 48px;
  display: grid;
  margin-top: 30px;
  justify-content: space-around;
  grid-template-columns: repeat(4, 1fr);


  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
