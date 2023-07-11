import styled from 'styled-components';


export const ProductDetailsContainer = styled.div`
  display: flex;
  padding-top: 24px ;
  flex-direction: column;
`;

export const ProductDetailsContent = styled.div`
  width: 650px;

  @media screen and (max-width: 1024px){
    width: 950px;
  }
`

export const Heading = styled.h3`
  font-size: 16px;
`;

export const Item = styled.div`
  display: flex;
  padding-bottom: 20px;

  &:last-child{
    padding-bottom: 0;
  }


  img {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }

  p {
    color: #717171;
    margin-bottom: 0;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h1`
  color: #4d4d4f;
  font-size: 20px;
`;

export const BottomLine = styled.hr`
  color: #4d4d4f;
`;