
import { 
  Heading,
  StepFourContainer,
  FormFourContainer,
} from "./step_four.styles";

import { Input } from "../../../components/atoms/input/input";
import useStepOne from '../../../hooks/listings/useStepOne';
import { FormProps } from '../../../types/props/molecules/steps';
const ListingStepFour = ({children, handleFromSubmition}: FormProps) => {

  
  const { handleFormChange } = useStepOne();

  return (
      <StepFourContainer>
        <Heading>Which of these best describes your product?</Heading>
        <FormFourContainer onSubmit={handleFromSubmition}>
          <Input 
            name="price" 
            type="number"
            required
            onChange={handleFormChange} 
            className="title" 
            placeholder="Price"
          />
          <Input 
            name="street_address"
            required
            onChange={handleFormChange} 
            className="itemOne" 
            placeholder="Street Address"
          />
          <Input 
            name="city"
            required
            onChange={handleFormChange} 
            className="itemTwo" 
            placeholder="City"
          />
          <Input 
            name="province"
            required
            onChange={handleFormChange} 
            className="itemThree" 
            placeholder="Province"
          />
          <Input 
            type="number"
            name="zip_code"
            required
            onChange={handleFormChange} 
            className="itemFour" 
            placeholder="Zip Code"
          />
          <div className='formFooter'>
            {children}
          </div>
        </FormFourContainer>
      </StepFourContainer>
  );
};

export default ListingStepFour;
