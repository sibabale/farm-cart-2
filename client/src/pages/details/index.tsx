import axios from 'axios';

import { useEffect, useState } from 'react';
import ImageGrid from '../../components/organisms/image_grid/image_grid';
import ProductCTA from '../../components/organisms/product_cta/product_cta';
import ProductIntro from '../../components/organisms/product_intro/product_intro';
import ProductDetails from '../../components/organisms/product_details/product_details';
import { SubPageLayout } from '../../components/organisms/layouts/sub_page_layout/sub_page_layout';
import {
    SellerDetails,
    AvatarSection,
    VerificationStatus,
    ProductInformation, 
    ProductInformationContainer,
} from './index.styles';

import { selectedProduct} from '../../redux/products/selected/product.selector';
import { setSelectedProduct} from '../../redux/products/selected/product.slice';

import Avatar from '../../components/atoms/avatar/avatar';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

export const DetailsPage = () => {
  
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectedProduct);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3333/products').then((response) => {
      dispatch(setSelectedProduct(response.data[0]))
      
      setIsLoading(false) 
    }).catch((error) => console.error(error))
  }, [])

  if (isLoading) {
    return (
      <SubPageLayout>
        <p>Loading</p>
      </SubPageLayout>
    )
  };
  
  return(
    <SubPageLayout>
      <ImageGrid images={product.images} />  
      <ProductInformationContainer>
      <ProductInformation>
        <div>
          <ProductIntro 
            name={product.title} 
            image={product.owner.personal_information.image} 
            price={product.price}
            quantity={product.quantity} 
          />
          <ProductDetails 
            items={[
              {icon: "../images/filters/animals/cow.png", text: product.breed, heading: "Breed"},
              {icon: "../images/weight.png", text: `${product.weight}kg`, heading: "Weight"},
            ]}
            description={product.description}
          />
          <SellerDetails>
            <AvatarSection>
              <Avatar
                image={product.owner.personal_information.image}
                heading={`Sold by ${product.owner.personal_information.first_quantity} ${product.owner.personal_information.last_name}`} 
                subHeading="Joined in 2 February 2023" />
              <VerificationStatus>
                <img src='../images/shield.png' alt="Shield Icon" />
                Identity Verified
              </VerificationStatus>
            </AvatarSection>
          </SellerDetails>
        </div>
        <ProductCTA price={product.price} />
      </ProductInformation>
      </ProductInformationContainer>
      
    </SubPageLayout>
  )
}

export default DetailsPage