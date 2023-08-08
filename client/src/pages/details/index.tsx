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
            className="w-screen"
            style={{margin: '0 auto', display: 'flex'}}
          >
            <source type="video/mp4" src={product.video} />
          </video>
        ) : ""
      }
      <div className="w-screen p-3 md:px-6 lg:p-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5">
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
            <div className="p-4">
              <div className="flex flex-col lg:flex-row md:justify-between">
                <Avatar
                  image={product.owner.farm.logo}
                  heading={product.owner.farm.name}
                  subHeading={`Joined in ${product.owner.farm.joined}`}
                />
                
                <VerificationStatus className="pt-4 flex align-center">
                  <img src='../../images/shield.png' alt="Shield Icon" />
                  Identity Verified
                </VerificationStatus>
              </div>
            </div>
          </div>
          <div className="md:ml-4 md:w-2/5 lg:ml-8">
            <ProductCTA price={product.price} />
          </div>
        </div>
      </div>
      
    </SubPageLayout>
  )
}

export default DetailsPage