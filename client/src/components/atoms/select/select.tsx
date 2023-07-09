
import {SelectContainer} from './select.styles';
import {SelectProps} from '../../../types/props/atoms';

export const Select = ({name, items, className, placeholder, onSelectChange}: SelectProps) => {

  const handleChange = (event: any) => {
    const value = event.target.value;
    onSelectChange(value);
  };

  return(
    <SelectContainer 
      name={name}
      onChange={handleChange}
      className={className} 
    >
      <option value="" disabled selected>{placeholder}</option>
      {
        items && items.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))
      }
    </SelectContainer>
  )
}

export default Select