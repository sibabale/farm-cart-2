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
}

export default function ProductIntro ({name, price}: IProductIntroProps) {
  return (
    <ProductIntroContainer>
      <ProductIntroContent>
        <div> 
          <ProductName>{name}</ProductName>
          <Badge>
            <Lot>10 cows</Lot>
          </Badge>
          <Price>R{price}</Price>
        </div>
        <Avatar />
      </ProductIntroContent>
      <BottomLine />
    </ProductIntroContainer>
  );
}
