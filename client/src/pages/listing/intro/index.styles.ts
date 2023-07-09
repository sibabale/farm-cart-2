import styled from 'styled-components';

export const Step = styled.div`
  /* display: flex; */
  margin-bottom: 80px;
  div {
    width: 50%;
    border-bottom: 1px solid black;
  }

  h4 { 
    font-size: 20px;
  }
`;
export const LeadText = styled.h1`
  font-size: 70px;
`;

export const ListingsContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  .lead-text {
    
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;

    h1 {
      font-size: 70px;
    }
  }

  .steps{
    width: 100%;
    display: grid;

    .step {
   
      display: grid;
      grid-gap: 20px;
      margin-bottom: 80px;
      grid-template-columns: 1fr 1fr;


      .content {
        border-bottom: 1px solid black;
          h4 {
          font-size: 20px;
        }
      }
      
    }
  }
`;

export const ListingSteps = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;