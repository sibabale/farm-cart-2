
import { 
  Heading,
  StepOneContainer,
  FormOneContainer,
} from "./step_one.styles";

import useStepOne from '../../../hooks/listings/useStepOne';
import useCategories from '../../../hooks/useCategories';
import MainCategories from '../../../data/categories/main_categories.json';
import Select from "../../../components/atoms/select/select";
import { Input } from "../../../components/atoms/input/input";

const ListingStepOne = () => {

  const {
    handleFormChange,
    handleStudChange,
    handleBreedChange,
    handleSubCategoryChange,
    handleMainCategoryChange
  } = useStepOne();

  const {
    breedOptions, 
    subCategoryOptions 
  } = useCategories();


  return (
      <StepOneContainer>
        <Heading>Which of these best describes your product?</Heading>
        <FormOneContainer>
          <Input 
            name="title" 
            className="title" 
            placeholder="Title"
            onChange={handleFormChange}
          />
          <Select 
            items={MainCategories} 
            className="itemOne"  
            placeholder="Main Category" 
            onSelectChange={handleMainCategoryChange} 
          />
          <Select 
            items={subCategoryOptions} 
            className="itemTwo" 
            placeholder="Sub Category" 
            onSelectChange={handleSubCategoryChange} 
          />
          <Select 
            items={breedOptions} 
            className="itemThree" 
            placeholder="Breed" 
            onSelectChange={handleBreedChange} 
          />
          <Select 
            items={["Yes", "No"]}
            className="itemFour" 
            placeholder="Stud" 
            onSelectChange={handleStudChange} 
          />
          <Input
            name="weight" 
            type="number"
            className="itemFive" 
            placeholder="Weight"
            onChange={handleFormChange}
          />
          <Input 
            name="quantity" 
            type="number" 
            className="itemSix" 
            placeholder="Quantity"
            onChange={handleFormChange}
          />
        </FormOneContainer>
      </StepOneContainer>
  );
};

export default ListingStepOne;
