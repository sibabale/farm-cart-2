import styled from 'styled-components';

export const Heading = styled.h1`
  margin-bottom: 50px;
`;

export const StepTwoContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
`;

export const ImageUploadersContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
  'main main two four'
  'main main three five';
  width: 700px;
  height: 400px;

  .uploader_one {
    width: 100%;
    height: 100%;
    grid-area: main;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .uploader_two {
    width: 100%;
    height: 100%;
    grid-area: two;
  }

  .uploader_three {
    width: 100%;
    height: 100%;
    grid-area: three;
  }

  .uploader_four {
    width: 100%;
    height: 100%;
    grid-area: four;
    border-top-right-radius: 10px;
  }

  .uploader_five {
    width: 100%;
    height: 100%;
    grid-area: five;
    border-bottom-right-radius: 10px;
  }

  div {
    flex-direction: column;
    border: 1px solid #000;
    background-size: cover;
    background-repeat: no-repeat;
  }

`;