import styled from 'styled-components';

export const Heading = styled.h1`
  margin-bottom: 50px;
`;

export const StepFourContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
`;

export const FormFourContainer = styled.form`
  display: grid;
  grid-gap: 50px;
  grid-template-areas: 
    'title title'
    'itemOne itemTwo'
    'itemThree itemFour'
    'footer footer'
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
  
  .formFooter {
    grid-area: footer;
  }
  
`;
