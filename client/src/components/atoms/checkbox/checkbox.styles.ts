import styled from 'styled-components';

type CheckboxContainerProps = {
  active?: boolean 
};

export const Icon = styled.img`
  width: 50px;
`;

export const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

export const CheckboxContainer = styled.div<CheckboxContainerProps>`
  width: 100px;
  border: 1px solid black;
  height: 100px;
  cursor: pointer;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: ${({active}) => active? '#D9D9D9': 'transparent'};
`;