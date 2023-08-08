import ContentLoader from 'react-content-loader'

import { Video, CardImage, ProductCardContainer } from "./product_card.styles";

type ProductCardLayoutProps = {
  id: string | number,
  image?: string | undefined | null, 
  price: number, 
  title: string, 
  video?: string,
  altText: string, 
  isLoading: boolean
};

const ProductCard = ({ id, image, video, price, title, altText, isLoading   }: ProductCardLayoutProps) => {
if (isLoading) {
  return (
    <ContentLoader
      viewBox="0 0 450 400"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      <rect x="0" y="227" rx="4" ry="4" width="271" height="9" />
      <rect x="0" y="246" rx="3" ry="3" width="119" height="6" />
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
  </ContentLoader>
  )
}

  return (
    <ProductCardContainer to={`/${id}`}>
      {
        image ? (
          <CardImage src={image} alt={altText} />  
        )
        : video ? (
          <Video autoPlay={true} className="wp-video-shortcode" id="video-2-1" width="1000" height="563" preload="metadata" >
            <source type="video/mp4" src={video} />
          </Video>
        ) : ''
      }
      <h5>{title}</h5>
      <b>R {price}</b>
    </ProductCardContainer>
  );
};

export default ProductCard;