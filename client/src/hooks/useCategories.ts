import { useState, useEffect } from 'react';
import SubCategories from '../data/categories/sub_categories.json'
import Breeds from '../data/breeds/breeds.json';

const  useCategories = () => {
  const [subCategory, setSubCategory] = useState('');
  const [breedOptions, setbreedOptions] = useState<string[]>([]);
  const [mainCategory, setMainCategory] = useState('');
  const [subCategoryOptions, setSubCategoryOptions] = useState<string[]>([]);
  
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
      // default:
      //   return []
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
    setSubCategory,
    setbreedOptions,
    setMainCategory,
    subCategoryOptions,
    setSubCategoryOptions,
  };
}

export default useCategories