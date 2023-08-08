import {
  Item,
  Content,
  Heading,
  BottomLine, 
  ProductDetailsContent,
  ProductDetailsContainer
  } from './product_details.styles';

export interface IProductDetailsProps {
  age?: string,
  stud?: boolean,
  breed: string,
  weight?: number,
  description: string
  sub_category: string
}

export default function ProductDetails ({age, stud, breed, weight,sub_category, description }: IProductDetailsProps) {

  return (
    <ProductDetailsContainer>
      <ProductDetailsContent>          
          {stud && (
            <Item>
              <img src="../../images/icons/app/badge.png" alt="Age Icon" />
              <Content>
                <Heading>Stud</Heading>
              </Content>
            </Item>
            )
          }
          <Item>
            <img src={`../../images/icons/animals/${sub_category}.svg`} alt={`${sub_category} Icon`} />
            <Content>
              <Heading>Breed</Heading>
              <p>{breed}</p>
            </Content>
          </Item>
          {age && (
            <Item>
              <img src="../../images/icons/app/age.png" alt="Age Icon" />
              <Content>
                <Heading>Age</Heading>
                <p>{age}</p>
              </Content>
            </Item>
            )
          }
          {weight && (
              <Item>
                <img src="../../images/icons/app/weight.png" alt="Weight Icon" />
                <Content>
                  <Heading>Weight</Heading>
                  <p>{weight}</p>
                </Content>
              </Item>
            )
          }
        <BottomLine />
        <Heading>Description</Heading>
        <p>{description}</p>
        <BottomLine />
      </ProductDetailsContent>
    </ProductDetailsContainer>
  );
}
