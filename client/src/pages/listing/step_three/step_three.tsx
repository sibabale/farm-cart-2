
import { 
  Heading,
  Textarea,
  StepOneContainer,
} from "./step_three.styles";

const ListingStepThree = () => {
  return (
    <StepOneContainer>
      <Heading>Which of these best describes your product?</Heading>
      <Textarea maxLength={500} placeholder="Description"/>
    </StepOneContainer>
  );
};

export default ListingStepThree;
