
import { 
  Heading,
  StepTwoContainer,
  ImageUploadersContainer
} from "./step_two.styles";

import ImageUploader from "../../../components/atoms/image_uploader/image_uploader";
import { FormProps } from '../../../types/props/molecules/steps';
import { uploadImages } from '../../../redux/products/product.slice';
import { selectProduct } from '../../../redux/products/product.selector';
import {useAppSelector, useAppDispatch} from "../../../hooks/redux";

const ListingStepTwo = ({children, handleFromSubmition}: FormProps) => {
  
  const dispatch = useAppDispatch()
  const productInfo = useAppSelector(selectProduct);

  const handleImageUpload = (event: any) => {    
    const file = event.target.files[0];    
    dispatch(uploadImages(URL.createObjectURL(file)))
  };
  
  return (
    <StepTwoContainer onSubmit={handleFromSubmition}>
      <Heading>Add your images</Heading>
      <ImageUploadersContainer>
        <ImageUploader 
          id="fileOne"
          name='imageOne'
          image={productInfo.images[0]} 
          required={productInfo.images[0] ? false : true}
          onChange={handleImageUpload} 
          className='uploader_one' 
        />
        <ImageUploader
          id="fileTwo"
          name="imageTwo"
          image={productInfo.images[1]}  
          required={productInfo.images[1] ? false : true}
          className='uploader_two'
          onChange={handleImageUpload} 
        />
        <ImageUploader 
          id="fileThree"
          name="imageThree"
          image={productInfo.images[2]} 
          required={productInfo.images[2] ? false : true}
          className='uploader_three'
          onChange={handleImageUpload} 
        />
        <ImageUploader 
          id="fileFour"
          name="imageFour"
          image={productInfo.images[3]} 
          required={productInfo.images[3] ? false : true}
          className='uploader_four'
          onChange={handleImageUpload} 
        />
        <ImageUploader 
          id="fileFive"
          name="imageFive"
          image={productInfo.images[4]} 
          required={productInfo.images[4] ? false : true}
          className='uploader_five'
          onChange={handleImageUpload} 
        />
      </ImageUploadersContainer>
      <div className='formForm'>
        {children}
      </div>
    </StepTwoContainer>
  );
};

export default ListingStepTwo;
