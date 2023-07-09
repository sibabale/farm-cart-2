import styled from 'styled-components';

type ProgressProps = {
  progress: number 
};

export const ProgressBarContianer  = styled.div`
  border: 1px solid black;
  border-radius: 100px;
`;

export const Progress = styled.div<ProgressProps>`
  width: ${({ progress }) => progress ? `${progress}%` : '0%'};
  height: 19px;
  border: 0;
  background-color: black;
  border-top-left-radius: 100px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 0;
  ${({ progress }) => progress === 100 && `
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  `};

`;