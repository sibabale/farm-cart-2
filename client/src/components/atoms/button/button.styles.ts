import styled from "styled-components";

type ButtonContainerProps = {
  $bg?: string
  $size?: string
  $color?: string
  $isRound?: boolean
  $borderColor?: string
  $iconPosition?: string
}

export const ButtonIcon = styled.img<ButtonContainerProps>`
  width: 20px;
  height: 20px;
  ${({$iconPosition}) => $iconPosition === 'end' ? 'margin-left: 10px': 'margin-right: 10px'};
`

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({$size}) => $size === 'lg' ? 'min-width: 300px;' : 'min-width: 150px;'}
  ${({$size}) => $size === 'sm' ? 'padding: 5px;' : 'padding: 10px;'}
  color: ${({$color}) => $color? $color: 'black'};
  border: 2px solid ${({$borderColor}) => $borderColor ? $borderColor :'black'};
  display: flex;
  font-size: 16px;
  align-items: center;
  border-radius: ${({$isRound}) => $isRound? '100px': '10px'};;
  justify-content: center;
  background-color: ${({$bg}) => $bg? $bg: 'transparent'};


`;
