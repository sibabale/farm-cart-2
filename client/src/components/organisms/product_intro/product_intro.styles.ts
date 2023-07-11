import styled from 'styled-components';

export const Price = styled.h2`
 margin-top: 20px;
`;

export const Lot = styled.p`
margin: 0;
`;

export const ProductIntroContent = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 1024px){
    width: 950px;
  }
`

export const ProductIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h1`
  color: #4d4d4f;
  font-size: 26px;
  margin-bottom: 10px;
`;

export const BottomLine = styled.hr`
  color: #4d4d4f;
  margin-top: 20px;
`;