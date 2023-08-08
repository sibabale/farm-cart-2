import styled from "styled-components";

export const LeadCardText = styled.h2`
color: white;
font-size: 90px;
`
export const LeadCardContainer = styled.div<{$image: string}>`
  width: 100%;
  height: 494px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background-size: cover;
  background-image: ${({$image}) => $image &&  `url(${$image})` };
  background-repeat: no-repeat;
  background-position: center;

  
  @media screen and (max-width: 768px) {
    height: 300px;
    background-size: cover;
  }
  @media screen and (max-width: 425px) {
    height: 176px;
    background-size: cover;
  }
`;

export const LeadCardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
