import styled from 'styled-components';

export const WhatsappLink = styled.a`
  color: #9D9797;
  display: flex;  
  margin-top: 50px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  img {
    width: 30px;
    margin-right: 30px;
  }
  
`;

export const EmptyStateContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  border: 2px dashed #9D9797;
  height: 300px;
  padding: 50px;
  border-radius: 10px;

  h2, h3 {
    color: #9D9797;
    text-align: center;
  }
`;