import { useEffect, useState } from 'react';

import { 
  Heading,
  StepTwoContainer,
  ImageUploadersContainer
} from "./step_two.styles";
import useStepOne from '../../../hooks/listings/useStepOne';
import ImageUploader from "../../../components/atoms/image_uploader/image_uploader";

const ListingStepTwo = () => {
  const { uploadImages }= useStepOne()
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageUpload = (event: any) => {    
    const file = event.target.files[0];
    setSelectedImages( [...selectedImages, URL.createObjectURL(file)]);
    // You can also send the file to a serverd using AJAX or fetch API
  };

  useEffect(() => {
    if (selectedImages.length === 5) {
      uploadImages(selectedImages)
    }
  }, [selectedImages] )
  return (
      <StepTwoContainer>
        <Heading>Add your images</Heading>
        <ImageUploadersContainer>
          <ImageUploader 
            id="fileOne" 
            image={selectedImages[0]} 
            onChange={handleImageUpload} 
            className='uploader_one' 
          />
          <ImageUploader
            id="fileTwo" 
            image={selectedImages[1]} 
            className='uploader_two'
            onChange={handleImageUpload} 
          />
          <ImageUploader 
            id="fileThree"
            image={selectedImages[2]} 
            className='uploader_three'
            onChange={handleImageUpload} 
          />
          <ImageUploader 
            id="fileFour"
            image={selectedImages[3]} 
            className='uploader_four'
            onChange={handleImageUpload} 
          />
          <ImageUploader 
            id="fileFive"
            image={selectedImages[4]} 
            className='uploader_five'
            onChange={handleImageUpload} 
          />
        </ImageUploadersContainer>
      </StepTwoContainer>
  );
};

export default ListingStepTwo;
