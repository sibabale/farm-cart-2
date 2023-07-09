import { useState } from 'react';
import useCategories from '../useCategories';

const  useStepOne = () => {
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

  const {setSubCategory, setMainCategory} = useCategories()

  const handleFormChange = (event: any) => {
    const {name, value} = event.target;    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(formData);
  };

  const handleBreedChange = (value: string) => {    
    setFormData(prevState => ({
      ...prevState,
      breed: value
    }));
  };

  const handleStudChange = (value: string) => {        
    setFormData(prevState => ({
      ...prevState,
      stud: value === 'Yes' ? true: false
    }));
  };

  const handleMainCategoryChange = (value: string) => {    
    setMainCategory(value);
    setFormData(prevState => ({
      ...prevState,
      main_category: value
    }));
  };

  const handleSubCategoryChange = (value: string) => {    
    setSubCategory(value);
    setFormData(prevState => ({
      ...prevState,
      sub_category: value
    }));
  };  

  const uploadImages = (value: string[]) => {    
    setFormData((prevState: any) => ({
      ...prevState,
      images: value
    }));
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