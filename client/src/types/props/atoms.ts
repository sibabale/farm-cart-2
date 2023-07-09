import {ReactNode} from 'react';

export type ButtonProps = {
  as?: string,
  bg?: string, 
  to?: string, 
  size?: string, 
  text?: string, 
  icon?: string, 
  color?: string, 
  onClick?: () => void, 
  isRound?: boolean, 
  iconAlt?: string,
  children?: ReactNode,
  borderColor?: string
  iconPosition?: string
}

export type InputProps = {
  name?: string, 
  type?: string, 
  onChange?: (event: any) => void, 
  className: string, 
  placeholder: string, 
}

export type SelectProps = {
  name?: string, 
  items: string[] | [], 
  className: string, 
  placeholder: string, 
  onSelectChange: (arg0: string) => void | []
}