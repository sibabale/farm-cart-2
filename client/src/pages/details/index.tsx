import { useParams } from "react-router-dom";
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
import { selectAllProducts} from '../../redux/products/all/all.product.selector';
import { setSelectedProduct} from '../../redux/products/selected/product.slice';

import Avatar from '../../components/atoms/avatar/avatar';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

export const DetailsPage = () => {
  let { id } = useParams();
  
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectedProduct);
  const products = useAppSelector(selectAllProducts);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const selectedProduct = products.find((item:any ) => {
      return item._id === Number(id)
    })
    dispatch(setSelectedProduct(selectedProduct))
      setIsLoading(false) 
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
      {
        product.images ? (
          <ImageGrid images={product.images} />  
        ): product.video ? (
          <video 
            autoPlay={true} 
            width="1000"
            height="563"
            preload="metadata" 
            controls={true} 
            style={{margin: '0 auto', display: 'flex'}}
          >
            <source type="video/mp4" src={product.video} />
          </video>
        ) : ""
      }
      <ProductInformationContainer>
      <ProductInformation>
        <div>
          <ProductIntro 
            name={product.title} 
            price={product.price}
            quantity={product.quantity} 
          />
          <ProductDetails 
            age={product.age}
            stud={product.stud}
            breed={product.breed}
            weight={product.weight}
            sub_category={product.sub_category}
            description={product.description}
          />
          <SellerDetails>
            <AvatarSection>
              <Avatar
                image={product.owner.farm.logo}
                heading={product.owner.farm.name}
                subHeading={`Joined in ${product.owner.farm.joined}`} />
              <VerificationStatus>
                <img src='../../images/shield.png' alt="Shield Icon" />
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