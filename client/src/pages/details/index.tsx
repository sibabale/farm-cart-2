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

import Avatar from '../../components/atoms/avatar/avatar';
export const DetailsPage = () => {
  return(
    <SubPageLayout>
      <ImageGrid images={['../images/cows/cow-1.jpeg']} />  
      <ProductInformationContainer>
      <ProductInformation>
        <div>
              <ProductIntro name="Diary Cow" price={100} />
              <ProductDetails 
                items={[
                  {icon: "../images/filters/animals/cow.png", text: "Bonsmara", heading: "Breed"},
                  {icon: "../images/weight.png", text: "300kg", heading: "Weight"},
                ]}
                description="Est excepteur proident in esse ullamco consectetur fugiat est do occaecat exercitation cupidatat. Velit mollit laborum duis voluptate cillum dolore incididunt aute aliquip sunt. Voluptate consectetur in excepteur ut mollit laboris ad. Tempor culpa incididunt ut elit minim sit pariatur proident proident eiusmod laboris. Aute tempor duis ipsum deserunt tempor eu. Occaecat aliqua magna amet Lorem pariatur dolore."
              />
        </div>
        <ProductCTA price={5000} />
      </ProductInformation>
      </ProductInformationContainer>
      <SellerDetails>
        <AvatarSection>
          <Avatar heading='Sold by Nolitha' subHeading="Joined in 2 February 2023" />
          <VerificationStatus>
            <img src='../images/shield.png' alt="Shield Icon" />
            Identity Verified
          </VerificationStatus>
        </AvatarSection>
      </SellerDetails>
    </SubPageLayout>
  )
}

export default DetailsPage