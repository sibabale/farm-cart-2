import { styled } from "styled-components";

export const SeeAll = styled.span`
  right: 20px;
  border: 1px solid black;
  bottom: 20px;
  padding: 10px;
  position: absolute; 
  font-weight: 400;
  border-radius: 5px;
  background-color: white;
`

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 425px) {
      display: none;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
  'main main two four'
  'main main three five';

  @media screen and (min-width: 1140px) {
    grid-template-rows: 250px 250px;
    grid-template-columns: 300px 300px 300px 300px;
  }

  @media screen and (max-width: 1024px) {
      grid-template-rows: 200px 200px;
      grid-template-columns: 230px 230px 230px 230px;
  }

  @media screen and (max-width: 768px) {
      grid-template-rows: 150px 150px;
      grid-template-columns: 165px 165px 165px 165px;
  }

  div {
    width: 300px;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .item1 { 
    width: 100%;
    height: 100%;
    grid-area: main;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .item2 { 
    width: 100%;
    height: 100%;
    grid-area: two;
  }

  .item3 { 
    width: 100%;
    height: 100%;
    grid-area: three;
  }

  .item4 { 
    width: 100%;
    height: 100%;
    grid-area: four;
    border-top-right-radius: 10px;
  }

  .item5 {
    width: 100%;
    height: 100%;
    position: relative;
    grid-area: five;
    border-bottom-right-radius: 10px;
  }
`

export const MobileImage = styled.div`

position: relative;

img {
  width: 100%;
  height: 300px;
}

span {
  right: 20px;
  bottom: 20px;
  position: absolute;
}

@media screen and (min-width: 768px) {
  display: none;
}
`;