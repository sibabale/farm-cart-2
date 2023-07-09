import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  updateProductInfo
} from '../../redux/products/product.slice';

const  useStepOne = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    "owner": {
      "uid": "121212121232",
      "verified": false,
      "personal_information": {
        "image": "https://bit.ly/41C5Ri9",
        "email": "jd@email.com",
        "last_name": "Doe",
        "first_name": "John",
        "cell_number": 27813170529
      },
    },
    "city": "",
    "stud": false,
    "breed": '',
    "price": 0,
    "title": '',
    "images": [],
    "weight": 0,
    "province": "",
    "zip_code": 0,
    "quantity": 0,
    "description": "",
    "sub_category": '',
    "main_category": '',
    "street_address": "",
});


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
    formData,
    setFormData,
    uploadImages,
    handleFormChange,
    handleStudChange,
    handleBreedChange,
    handleSubCategoryChange,
    handleMainCategoryChange, 
  };
}

export default useStepOne