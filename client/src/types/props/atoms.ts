import {ReactNode} from 'react';

export type ButtonProps = {
  as?: string,
  bg?: string, 
  to?: string, 
  size?: 'lg' | 'md' | 'sm'
  type?: 'submit' | 'reset' | 'button' | undefined
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
  required: boolean, 
  onChange?: (event: any) => void, 
  className: string, 
  placeholder: string, 
}

export type SelectProps = {
  name?: string, 
  items: string[] | [], 
  required: boolean
  className: string
  placeholder: string
  onSelectChange: (arg0: string) => void | []
}

export type ImageUploaderProps = {
  id: string, 
  name?: string, 
  image: string, 
  required?: boolean, 
  className: string, 
  onChange: (arg:any) => void, 
}