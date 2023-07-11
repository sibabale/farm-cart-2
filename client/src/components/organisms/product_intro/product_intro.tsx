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
  image: string,
  price: number
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
          <Price>R{price}</Price>
        </div>
        <Avatar image={image} />
      </ProductIntroContent>
      <BottomLine />
    </ProductIntroContainer>
  );
}
