import styled from 'styled-components';

export const PageContianer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Heading = styled.h1`
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;
`;

export const Card = styled.div`
  width: 300px;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  h4 {
    margin-top:12px;
    font-weight: bold;
  }
`;