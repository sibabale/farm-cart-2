import {ReactNode, useState} from 'react';

import {Text, Icon, CheckboxContainer} from './checkbox.styles';

export interface ICheckboxProps {
  text?: string
  icon?: string
  active?: boolean
  onClick: () => void;
  children?: ReactNode 
}

export default function Checkbox ({icon, text, active, onClick, children}: ICheckboxProps) {


  return (
    <CheckboxContainer active={active}  onClick={onClick}>
      {icon && <Icon src={icon} alt="" />}
      {text &&  <Text>{text}</Text>}
      {children}
    </CheckboxContainer>
  );
}
