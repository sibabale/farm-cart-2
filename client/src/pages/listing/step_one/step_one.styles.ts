import styled from 'styled-components';

export const Heading = styled.h1`
  margin-bottom: 50px;
`;

export const StepOneContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
`;

export const FormOneContainer = styled.form`
  display: grid;
  grid-gap: 50px;
  grid-template-areas: 
    'title title'
    'itemOne itemTwo'
    'itemThree itemFour'
    'itemFive itemSix'
    'footer footer'
  ;
  .title {
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

  .itemFive {
    grid-area: itemFive;
  }

  .itemSix {
    grid-area: itemSix;
  }
  
  .formFooter {
    grid-area: footer;
  }
`;
