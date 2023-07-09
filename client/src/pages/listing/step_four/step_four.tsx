
import { 
  Heading,
  StepOneContainer,
  FormOneContainer,
} from "./step_four.styles";

import useStepOne from '../../../hooks/listings/useStepOne';
import { Input } from "../../../components/atoms/input/input";

const ListingStepFour = () => {

  const {
    formData,
    handleFormChange,
  } = useStepOne();

  return (
      <StepOneContainer>
        <Heading>Which of these best describes your product?</Heading>
        <FormOneContainer>
          <Input 
            name="price" 
            type="number"
            onChange={handleFormChange} 
            className="title" 
            placeholder="Price"
          />
          <Input 
            name="street_address"
            onChange={handleFormChange} 
            className="itemOne" 
            placeholder="Street Address"
          />
          <Input 
            name="city"
            onChange={handleFormChange} 
            className="itemTwo" 
            placeholder="City"
          />
          <Input 
            name="province"
            onChange={handleFormChange} 
            className="itemThree" 
            placeholder="Province"
          />
          <Input 
            type="number"
            name="zip_code"
            onChange={handleFormChange} 
            className="itemFour" 
            placeholder="Zip Code"
          />
        </FormOneContainer>
      </StepOneContainer>
  );
};

export default ListingStepFour;
