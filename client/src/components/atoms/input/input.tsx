
import { InputContainer } from "./input.styles";

import {InputProps} from '../../../types/props/atoms';

export const Input = ({type = 'text', name, onChange, className, placeholder  }: InputProps) => {



  return (
    <InputContainer 
        type={type}
        name={name}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
  );
};
