import {
    Label,
    Uploader,
} from './image_uploader.styles';
import {ImageUploaderProps} from '../../../types/props/atoms';

const ImageUploader = (
  {id, image, name, required, className, onChange}: ImageUploaderProps
) => {

  
  return (
      <Uploader className={className} $bg={image}>
        <input 
          id={id} 
          type="file" 
          name={name} 
          onChange={onChange} 
          required={required} 
        />
        <Label 
          htmlFor={id}
          $selected={image ? true: false}
          data-image-uploader
        >
          Drop images here
        </Label>
      </Uploader>
  );
};

export default ImageUploader;
