import styled from 'styled-components';

export const Heading = styled.h1`
  margin-bottom: 50px;
`;

export const StepOneContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
`;

export const FormOneContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-areas: 
    'title title'
    'itemOne itemTwo'
    'itemThree itemFour'
  ;
  .title {
    width: 40%;
    grid-area: title;
  }
  
  .itemOne {
    grid-area: itemOne;
  }

  .itemTwo {
    grid-area: itemTwo;
  }

  .itemThree {
    grid-area: itemThree;
  }

  .itemFour {
    grid-area: itemFour;
  }
  
`;
