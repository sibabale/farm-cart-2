
import { Button } from "../../atoms/button/button";
import {Price, ProductCTAContainer} from "./product_cta.styles"

export interface IProductCTAProps {
  price: number,
}

export default function ProductCTA ({price}: IProductCTAProps) {
  return (
    <ProductCTAContainer>
      <Price>R {price}</Price>
      <Button text="Chat to Seller" icon="../images/whatsapp.png"/> 
    </ProductCTAContainer>
  );
}
