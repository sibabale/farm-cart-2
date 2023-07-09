import {
  Item,
  Content,
  Heading,
  BottomLine, 
  ProductDetailsContent,
  ProductDetailsContainer
  } from './product_details.styles';

export interface IProductDetailsProps {
  items: Array<{
    icon: string
    text: string
    heading: string
  }>,
  description: string
}

export default function ProductDetails ({items,description }: IProductDetailsProps) {
  return (
    <ProductDetailsContainer>
      <ProductDetailsContent>
        {items && items.map((item, index) => (
          <Item key={index}>
            <img src={item.icon} alt="cow" />
            <Content>
              <Heading>{item.heading}</Heading>
              <p>{item.text}</p>
            </Content>
          </Item>
        ))}
        <BottomLine />
        <Heading>Description</Heading>
        <p>{description}</p>
        <BottomLine />
      </ProductDetailsContent>
    </ProductDetailsContainer>
  );
}
