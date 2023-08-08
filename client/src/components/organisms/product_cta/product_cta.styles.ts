import styled from 'styled-components';

export const ProductCTAContainer = styled.div`
  width: 400px;
  height: fit-content;
  border: 2px solid lightgray;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;

  button {
    margin: 20px 0;
  }
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: 800;
`;

export const BankingDetails = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #d9d9d9;
`;