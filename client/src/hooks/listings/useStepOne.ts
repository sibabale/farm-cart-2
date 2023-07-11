import { useDispatch } from 'react-redux';
import {
  updateProductInfo
} from '../../redux/products//new/product.slice';

const  useStepOne = () => {

  const dispatch = useDispatch();

  const uploadImages = (value: string[]) => {     
    dispatch(updateProductInfo({name: 'images', value}))
  };  

  const handleFormChange = (event: any) => {
    const {name, value} = event.target;    
    dispatch(updateProductInfo({name, value}));
  };

  const handleBreedChange = (value: string) => {    
    dispatch(updateProductInfo({name: 'breed', value}));
  };

  const handleStudChange = (value: string) => {        
    dispatch(updateProductInfo({name: 'stud', value: value === 'Yes' ? true: false}));
  };

  const handleSubCategoryChange = (value: string) => {    
    dispatch(updateProductInfo({name: 'sub_category', value}))
  };

  const handleMainCategoryChange = (value: string) => {    
    dispatch(updateProductInfo({name: 'main_category', value}))
  };

  return { 
    uploadImages,
    handleFormChange,
    handleStudChange,
    handleBreedChange,
    handleSubCategoryChange,
    handleMainCategoryChange, 
  };
}

export default useStepOne