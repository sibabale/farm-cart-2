

import { 
  Heading,
  StepOneContainer,
  FormOneContainer,
} from "./step_one.styles";

import Select from "../../../components/atoms/select/select";
import { Input } from "../../../components/atoms/input/input";
import useStepOne from '../../../hooks/listings/useStepOne';
import { FormProps } from '../../../types/props/molecules/steps';
import useCategories from '../../../hooks/useCategories';
import MainCategories from '../../../data/categories/main_categories.json';


const ListingStepOne = ({children, handleFromSubmition}: FormProps ) => {

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
        <FormOneContainer onSubmit={handleFromSubmition}>
          <Input 
            name="title" 
            required
            className="title" 
            placeholder="Title"
            onChange={handleFormChange}
          />
          <Select 
            items={MainCategories} 
            required
            className="itemOne"  
            placeholder="Main Category" 
            onSelectChange={handleMainCategoryChange} 
          />
          <Select
            items={subCategoryOptions} 
            required
            className="itemTwo" 
            placeholder="Sub Category" 
            onSelectChange={handleSubCategoryChange} 
          />
          <Select
            items={breedOptions} 
            required
            className="itemThree" 
            placeholder="Breed" 
            onSelectChange={handleBreedChange} 
          />
          <Select 
            items={["Yes", "No"]}
            required
            className="itemFour" 
            placeholder="Stud" 
            onSelectChange={handleStudChange} 
          />
          <Input
            name="weight" 
            type="number"
            required
            className="itemFive" 
            placeholder="Weight"
            onChange={handleFormChange}
          />
          <Input 
            name="quantity" 
            type="number" 
            required
            className="itemSix" 
            placeholder="Quantity"
            onChange={handleFormChange}
          />
          <div className="formFooter">
            {children}
          </div>
        </FormOneContainer>
      </StepOneContainer>
  );
};

export default ListingStepOne;
