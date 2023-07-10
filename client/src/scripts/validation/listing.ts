import {ProductType} from '../../types/products/product';

export const validateLsitForm = (product: ProductType) => {
  const {
    city,
    owner,
    stud,
    breed,
    price,
    title,
    images,
    weight,
    province,
    zip_code,
    quantity,
    description,
    sub_category,
    main_category,
    street_address,
  } = product;

  if(
    city && 
    stud && 
    owner && 
    breed && 
    price && 
    title &&
    images.length === 5 &&
    weight !== 0 &&
    province &&
    zip_code !== 0 &&
    quantity !== 0 &&
    description &&
    sub_category &&
    main_category &&
    street_address
  ) {
    return true;
  }
  return false;

}

