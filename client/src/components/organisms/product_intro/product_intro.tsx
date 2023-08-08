import Avatar from '../../atoms/avatar/avatar';
import Badge from '../../atoms/badge/badge';
import {
  Lot, 
  Price,
  BottomLine, 
  ProductName,
  ProductIntroContent, 
  ProductIntroContainer
} from './product_intro.styles';

export interface IProductIntroProps {
  name: string,
  price: number
  image?: string,
  quantity: number
}

export default function ProductIntro ({name, image, price, quantity}: IProductIntroProps) {
  return (
    <ProductIntroContainer>
      <ProductIntroContent>
        <div> 
          <ProductName>{name}</ProductName>
          <Badge>
            <Lot>Quantity: {quantity}</Lot>
          </Badge>
          <Price>Each: R{price}</Price>
          <Price>Lot: R{price * 8}</Price>
        </div>
        {image && <Avatar image={image} />}
      </ProductIntroContent>
      <BottomLine />
    </ProductIntroContainer>
  );
}
