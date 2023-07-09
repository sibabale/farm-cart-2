import styled from 'styled-components';

export const ProductInformationContainer = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: center;
`;

export const ProductInformation = styled.div`
  width: 1230px;
  display: flex;
  justify-content: space-between;
`;


export const VerificationStatus   = styled.div`
  width: 650px;
  display: flex;
  align-items: center;

  img{ 
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;

export const SellerDetails   = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;

  /* div {
    &:not(:last-child) {
      margin-right: 100px;
    }
  } */
`;

export const AvatarSection   = styled.div`
  width: 1230px;
  display: flex;
  justify-content: space-between;
`;