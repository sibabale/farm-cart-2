import {
    Label,
    Uploader,
} from './image_uploader.styles';

const ImageUploader = (
    {id, image, className, onChange}:
    {id: string, image: string, className: string, onChange: (arg:any) => void, }
  ) => {

  return (
      <Uploader className={className} $bg={image}>
        <input id={id} type="file" onChange={onChange} />
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
