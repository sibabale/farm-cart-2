
import { InputContainer } from "./input.styles";

import {InputProps} from '../../../types/props/atoms';

export const Input = ({type = 'text', name, required =true, onChange, className, placeholder  }: InputProps) => {



  return (
    <InputContainer 
        type={type}
        name={name}
        required={required}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
  );
};
