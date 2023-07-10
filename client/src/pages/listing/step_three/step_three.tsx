
import { 
  Heading,
  Textarea,
  StepThreeContainer,
} from "./step_three.styles";

import useStepOne from '../../../hooks/listings/useStepOne';
import { FormProps } from '../../../types/props/molecules/steps';

const ListingStepThree = ({children, handleFromSubmition}: FormProps) => {

  const {handleFormChange} =  useStepOne();

  return (
    <StepThreeContainer onSubmit={handleFromSubmition}>
      <Heading>Which of these best describes your product?</Heading>
      <Textarea 
        name="description" 
        onChange={handleFormChange}
        maxLength={500}
        placeholder="Description" 
      />
      <div>
        {children}
      </div>
    </StepThreeContainer>
  );
};

export default ListingStepThree;
