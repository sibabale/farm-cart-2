import { useState, useEffect } from 'react';
import SubCategories from '../data/categories/sub_categories.json'
import Breeds from '../data/breeds/breeds.json';
import { useSelector } from 'react-redux';
import {
  selectSubCategory,
  selectMainCategory
} from '../redux/products/product.selector';

const  useCategories = () => {

  const [breedOptions, setbreedOptions] = useState<string[]>([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState<string[]>([]);
  
  const subCategory = useSelector(selectSubCategory);
  const mainCategory = useSelector(selectMainCategory);

  useEffect(() => {
    switch (mainCategory) {
      case "Feed":
        return setSubCategoryOptions(SubCategories.feed)  
      case "Tools":
        return setSubCategoryOptions(SubCategories.tools)  
      case "Seeds":
        return setSubCategoryOptions(SubCategories.seeds)  
      case "Health":
        return setSubCategoryOptions(SubCategories.health)   
      case "Animals":
        return setSubCategoryOptions(SubCategories.animals)  
    }
  }, [mainCategory])

  useEffect(() => {
    switch (subCategory) {
      case "Dog":
        return setbreedOptions(Breeds.dogs)  
      case "Cow":
        return setbreedOptions(Breeds.cows)  
      case "Goat":
        return setbreedOptions(Breeds.goats)  
      case "Sheep":
        return setbreedOptions(Breeds.sheep)   
      case "Chicken":
        return setbreedOptions(Breeds.chicken)  
    }
  }, [subCategory])


  return { 
    subCategory,
    mainCategory,
    breedOptions, 
    setbreedOptions,
    subCategoryOptions,
    setSubCategoryOptions,
  };
}

export default useCategories